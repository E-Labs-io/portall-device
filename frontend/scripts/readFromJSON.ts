/** @format */

import * as FileSaver from "file-saver";

function loadJSONtoObject(file: File) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    try {
      const obj = JSON.parse(reader.result as string);
      console.log(obj);
    } catch (e) {
      console.error(`Error loading JSON: ${e}`);
    }
  };
  reader.onerror = (error) => {
    console.error(`Error reading file: ${error}`);
  };
}

export default loadJSONtoObject;
