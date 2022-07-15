import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  Popover,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const languageMap = {
  en: { label: "English" },
  "pt-BR": { label: "Português" },
};

const LanguageSelect = ({ onClickProps }) => {
  const selectedLanguage = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Typography
        component="div"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
      >
        <Typography variant="menu">
          {languageMap[selectedLanguage].label}
        </Typography>
        <ArrowDropDownIcon />
      </Typography>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("LanguageSelect.select-language")}</ListSubheader>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                  onClickProps();
                  window.location.reload(false);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
