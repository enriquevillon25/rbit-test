import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useClientMediaQuery(
  query: string,
  defaultMatches = false
): boolean {
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery(query, { noSsr: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? matches : defaultMatches;
}

export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
