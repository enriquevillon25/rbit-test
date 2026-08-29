import type { FirebaseApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEWBihivauP2sgk9tMH8GmUOwBhWXMqIc",
  authDomain: "rbit-landing-page.firebaseapp.com",
  projectId: "rbit-landing-page",
  storageBucket: "rbit-landing-page.firebasestorage.app",
  messagingSenderId: "227411209415",
  appId: "1:227411209415:web:17c9ef1efdec0ab20062e2",
  measurementId: "G-QDE1N1N189",
} as const;

let firebaseApp: FirebaseApp | null = null;
let firebaseAnalytics: Analytics | null = null;
let analyticsPromise: Promise<Analytics | null> | null = null;

function reportAnalyticsError(error: unknown): void {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn("[RBIT Analytics]", error);
  }
}

export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return null;
  }

  if (firebaseAnalytics) {
    return firebaseAnalytics;
  }

  if (analyticsPromise) {
    return analyticsPromise;
  }

  analyticsPromise = Promise.all([
    import("firebase/app"),
    import("firebase/analytics"),
  ])
    .then(async ([firebaseAppModule, analyticsModule]) => {
      const isAnalyticsSupported = await analyticsModule.isSupported();

      if (!isAnalyticsSupported) {
        return null;
      }

      firebaseApp =
        firebaseAppModule.getApps().length > 0
          ? firebaseAppModule.getApp()
          : firebaseAppModule.initializeApp(firebaseConfig);

      firebaseAnalytics = analyticsModule.getAnalytics(firebaseApp);

      return firebaseAnalytics;
    })
    .catch((error) => {
      reportAnalyticsError(error);
      return null;
    });

  return analyticsPromise;
}

export async function logAnalyticsEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): Promise<void> {
  const analytics = await getFirebaseAnalytics();

  if (!analytics) {
    return;
  }

  const { logEvent } = await import("firebase/analytics");
  logEvent(analytics, eventName, params);
}
