/** @format */

import dotenv from "dotenv";
dotenv.config();
import useBrowser from "./hooks/useBrowser";
import { exec } from "child_process";

console.log("Mounted");

exec("cd ../frontend/ npm run dev", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  Start();
});

const Start = async () => {
  const { browser, page } = await useBrowser();
  const url = "http://localhost:3000";

  await page.goto(url);
};
