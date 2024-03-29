import 'jest-extended';
import puppeteer, { Browser, Page } from 'puppeteer';

/**
 * Install:
 *      yarn add --dev jest-puppeteer
 *      yarn add --dev puppeteer
 *
 * Damit der "Compile-Prozess" vor dem Aufruf des Browsers angestoßen wird
 * muss jest wie folgt gestartet werden:
 *       export E2E_TEST='true' && jest src/test/e2e/browser.specs.ts
 *
 * Mehr:
 *      https://dev.to/aalises/dealing-with-asynchrony-when-writing-end-to-end-tests-with-puppeteer--jest-n37
 */
describe('puppeteer.ts', () => {
    const TEST_PORT = 5000;

    // const logger = LoggerFactory.getLogger('test.reminder.ts');

    let page: Page;
    let browser: Browser;
    const width = 1920;
    const height = 1080;

    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            // slowMo: 100,
            // args: [`--window-size=${width},${height}`],
        });
        page = await browser.newPage();
        await page.goto(`http://localhost:${TEST_PORT}/`, { waitUntil: 'networkidle0' });
        await page.setViewport({ width, height });
        // await jestPuppeteer.debug();
    });

    afterEach(async () => {
        await page.close();
        await browser.close();
    });

    test('Test in Browser', async (): Promise<void> => {
        let title = await page.title();

        for (let i = 0; i < 10 && !title.startsWith('✔'); i++) {
            await  new Promise(r => setTimeout(r, 4000));
            title = await page.title();
            console.log(`Cycle: ${i}`);
        }

        title = await page.title();
        expect(title).toStartWith('✔');

    }, 100000);
});
