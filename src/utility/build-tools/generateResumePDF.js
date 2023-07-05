/**
 * This script will do the following:
 * - spawn a puppeteer process
 * - navigate to resume page
 * - download a pdf of the resume
 * - store as resume.pdf in the dist/downloads/ directory
 */
import puppeteer from "puppeteer";
import fs from 'fs';
import path from 'path';

const downloadProtocol = 'http';
const downloadDomain = '127.0.0.1:8080';
const downloadPath = '/resume';

async function generateResumePDF() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({width: 1400, height: 1600 });
    await page.goto(`${downloadProtocol}://${downloadDomain}${downloadPath}`);

    // Get the pdf size.
    const height = await page.evaluate(() => {
        return document.getElementsByTagName('html')[0].getBoundingClientRect().height;
    })

    await page.waitForNetworkIdle();

    await page.emulateMediaType('screen');
    fs.writeFileSync('tmppdf.pdf', await page.pdf({
        // format: 'A4',
        width: '1400px',
        height: `${height + 500}px`,
        preferCSSPageSize: true,
    }));

    await browser.close();
}

generateResumePDF().then(() => process.exit(0)).catch(console.error);