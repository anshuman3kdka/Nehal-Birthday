import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');

  // Wait for content to be visible
  await page.waitForSelector('main');

  // Take a screenshot
  await page.screenshot({ path: 'verification/final_home.png', fullPage: true });

  await browser.close();
})();
