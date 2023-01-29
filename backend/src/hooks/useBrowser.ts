/** @format */
import puppeteer from "puppeteer";

const useBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-fullscreen" ],
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  return { browser, page };
};

export default useBrowser;
