/** @format */

import { saveAs } from "file-saver";

function writeObjectToJSONFile(obj: object) {
  const json = JSON.stringify(obj);
  const blob = new Blob([json], { type: "application/json" });
  saveAs(blob, "file.json");
}

export default writeObjectToJSONFile;
