const puppeteer = require('puppeteer');

describe('UMG - GRUPO 3 Web Application', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8000');  // Cambia esto por la URL de tu página en GitHub Pages
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Página debe contener el título "UMG - GRUPO 3"', async () => {
    await page.waitForSelector('h1');
    const title = await page.$eval('h1', el => el.textContent);
    expect(title).toBe('UMG - GRUPO 3');
  });

  test('La tabla debe tener 5 filas', async () => {
    const rows = await page.$$eval('table tr', rows => rows.length);
    expect(rows).toBe(6);  // 5 filas de datos más la fila de cabecera
  });
});
