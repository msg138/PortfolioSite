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
import child_process from "child_process";
import waitPort from "wait-port";

const downloadPort = 9098;
const downloadProtocol = 'http';
const downloadDomain = `127.0.0.1:${downloadPort}`;
const downloadPath = '/resume';

const pdfGenerationDestinationFolder = path.resolve('./dist/downloads');
const pdfGenerationDestinationFile = `${pdfGenerationDestinationFolder}/resume.pdf`;

async function generateResumePDF() {
    console.log('Starting preview');
    const serverProcess = child_process.spawn('npm', ['run', 'preview']);
    await waitPort({
        host: '127.0.0.1',
        port: downloadPort,
        protocol: 'http',
    });
    console.log('Taking pdf');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // await page.setViewport({width: 1400, height: 1600 });
    await page.goto(`${downloadProtocol}://${downloadDomain}${downloadPath}`);

    // Get the pdf size.
    const height = await page.evaluate(() => {
        return document.getElementsByTagName('html')[0].getBoundingClientRect().height;
    })

    await page.waitForNetworkIdle();

    if (!fs.existsSync(pdfGenerationDestinationFolder)) {
        fs.mkdirSync(pdfGenerationDestinationFolder);
    }

    fs.writeFileSync(pdfGenerationDestinationFile, await page.pdf({
        format: 'A3',
        preferCSSPageSize: true,
        margin: {
            top: '1in',
            right: '1in',
            bottom: '1in',
            left: '1in',
        }
    }));

    console.log('Closing all');
    await browser.close();
    serverProcess.kill('SIGINT');
    console.log('FIN');
}

generateResumePDF().then(() => process.exit(0)).catch(console.error);