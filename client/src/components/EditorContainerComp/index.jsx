import React from "react";
import { Box, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";

export default function EditorContainerComp({ setText }) {
  const { t } = useTranslation();

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    convertToHTML();
  };

  const convertToHTML = () => {
    const stateHtml = stateToHTML(editorState.getCurrentContent());
    setText(stateHtml);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: "8px", md: "12px" },
        borderRadius: "12px",
        borderColor: "secondary.80",
        // border: "2px solid",
        // borderColor: "primary.40",
      }}
    >
      <Box minHeight={520}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          placeholder={t("Dashboard.publish.textField.text")}
        />
      </Box>
    </Paper>
  );
}
