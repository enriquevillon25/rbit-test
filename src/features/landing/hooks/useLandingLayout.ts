import { useTheme } from "@mui/material/styles";
import useClientMediaQuery, { useIsMounted } from "lib/useClientMediaQuery";
import type { LandingLayoutState } from "../types";

export function useLandingLayout(): LandingLayoutState {
  const theme = useTheme();
  const isTablet = useClientMediaQuery(theme.breakpoints.down("lg"));
  const isMounted = useIsMounted();

  return {
    isTablet,
    isMounted,
    showPageNav: isMounted && !isTablet,
  };
}
