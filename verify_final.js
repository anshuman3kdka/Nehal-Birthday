import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000); // Wait for animations
  await page.screenshot({ path: '/home/jules/verification/verification_final.png' });
  await browser.close();
})();
