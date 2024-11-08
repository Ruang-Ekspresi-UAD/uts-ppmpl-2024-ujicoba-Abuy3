const puppeteer = require('puppeteer');

describe('Pengujian Integrasi Halaman HTML', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Gunakan { headless: false } untuk melihat browser saat pengujian
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("D:/KULIAH/Semester 5/UTS PPMPL/uts-ppmpl-2024-ujicoba-Abuy3/index.html"); // Ganti dengan path ke file HTML Anda
  });
    

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });
  

  test('Menavigasi ke bagian "Sobre mim"', async () => {
    // Klik link "Sobre mim"
    await page.click('a[href="#sobre mim"]');
    // Periksa apakah bagian "Sobre mim" muncul
    const sobreMimSection = await page.$('#sobre mim');
    expect(sobreMimSection).not.toBeNull();
  });

  test('Menavigasi ke bagian "My Hobbies"', async () => {
    // Klik link "My Hobbies"
    await page.click('a[href="#hobbies"]');
    // Periksa apakah bagian "hobbies" muncul
    const hobbiesSection = await page.$('#hobbies');
    expect(hobbiesSection).not.toBeNull();
  });

  test('Menavigasi ke bagian "Contact Me"', async () => {
    // Klik link "Contact Me"
    await page.click('a[href="#contact"]');
    // Periksa apakah bagian "contact" muncul
    const contactSection = await page.$('#contact');
    expect(contactSection).not.toBeNull();
  });

  test('Menampilkan gambar profil dengan benar', async () => {
    const image = await page.$('img[alt="Profile Picture"]');
    const src = await page.evaluate(img => img.src, image);
    expect(src).toMatch(/profile\.jpg/); // Memastikan gambar dapat dimuat dengan benar
  });

  test('Footer muncul dengan benar', async () => {
    const footer = await page.$('footer');
    expect(footer).not.toBeNull();
  });

  test('Link Discord berfungsi dengan benar', async () => {
    const discordLink = await page.$('a[href="https://discord.gg/9p2k43WF"]');
    expect(discordLink).not.toBeNull();
  });
});
