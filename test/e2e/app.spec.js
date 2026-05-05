import express from "express";
import { expect } from "chai";
import path from "path";
import { chromium } from "playwright";

const app = express();
app.use(express.static(path.join(process.cwd(), "dist")));
app.use(express.static(path.join(process.cwd(), "public")));

const url = "http://localhost:3000";

describe("End to End Tests", function () {
    this.timeout(10000);

    let httpServer = null;
    let browser = null;
    let page = null;

    before(async () => {
        httpServer = app.listen(3000);
        browser = await chromium.launch();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto(url);
    });

    afterEach(async () => {
        await page.close();
    });

    after(async () => {
        await browser.close();
        httpServer.close();
    });

    // This is where your code is going to go
    it("should contain a <h1> element for the page title", async () => {
        await page.waitForSelector("h1", { timeout: 2000 });
        const header = await page.locator("h1").textContent();
        expect(header).to.not.be.null;
        expect(header.trim()).to.equal("Mortgage Calculator");
    });

    it("should contain a <button> element to calculate monthly payment", async () => {
        await page.waitForSelector("button", { timeout: 2000 });
        const header = await page.locator("button").textContent();
        expect(header).to.not.be.null;
        expect(header.trim()).to.equal("Calculate");
    });

    it("should have an option for Monthly with value 12", async () => {
        const text = await page.locator('option[value="12"]').textContent();
        expect(text.trim()).to.equal("Monthly");
    });

    it("should have an option for Quarterly with value 4", async () => {
        const text = await page.locator('option[value="4"]').textContent();
        expect(text.trim()).to.equal("Quarterly");
    });

    it("should have an input field for principal", async () => {
        const text = await page.locator('input[name="principal"]').textContent();
        expect(text.trim()).to.exist;
    });

    it("should have an input field for interest rate", async () => {
        const text = await page.locator('input[name="interestRate"]').textContent();
        expect(text.trim()).to.exist;
    });

    it("should have an input field for loan term", async () => {
        const text = await page.locator('input[name="loanTerm"]').textContent();
        expect(text.trim()).to.exist;
    });

    it("should have an select field for period", async () => {
        const text = await page.locator('select[name="period"]').textContent();
        expect(text.trim()).to.exist;
    });

    it("should have a <p> element for output", async () => {
        const text = await page.locator('p[id="output"]').textContent();
        expect(text.trim()).to.exist;
    });

    it("should correctly calculate mortgage", async () => {
      await page.fill("input[name=principal]", "300000");
      await page.fill("input[name=interestRate]", "3.75");
      await page.fill("input[name=loanTerm]", "30");
      await page.selectOption("select[name=period]", "12");
      await page.click("button#calculate");
      await page.waitForSelector("#output", { timeout: 4000 });
      const outputText = await page.locator("#output").textContent();
      expect(outputText.trim()).to.equal("$1389.35");
  }).timeout(6500);
});