import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import { useTranslation } from "lib/useTranslation";
import {
  getLanguageOption,
  supportedLanguages,
  type SupportedLanguage,
} from "i18n/languages";
import { getLocalizedRoute } from "i18n/routes";
import useStyles from "./header-style";

interface LanguageSwitcherProps {
  mobile?: boolean;
}

function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { classes, cx } = useStyles() as any;
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentLanguage = getLanguageOption(i18n.language);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: SupportedLanguage) => {
    i18n.changeLanguage(language);
    handleClose();
    router.push(getLocalizedRoute(language));
  };

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleOpen}
        aria-controls={open ? "language-switcher-menu" : undefined}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        aria-label={t("education-landing.header_language")}
        className={cx(classes.languageButton, mobile && classes.languageButtonMobile)}
        startIcon={<LanguageIcon />}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {currentLanguage.shortLabel}
      </Button>
      <Menu
        id="language-switcher-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-label": t("education-landing.header_language"),
        }}
      >
        {supportedLanguages.map((language) => (
          <MenuItem
            key={language.code}
            selected={language.code === i18n.language}
            onClick={() => handleLanguageChange(language.code)}
          >
            <ListItemText
              primary={language.nativeLabel}
              secondary={language.label !== language.nativeLabel ? language.label : undefined}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitcher;
