import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";
import LoginPage from "../pages/LoginPage.js";

let browser;
let page;
let loginPage;

Given('que estou na página de login do Moodle', async function () {

  browser = await chromium.launch({ headless: false })
  page = await browser.newPage()

  loginPage = new LoginPage(page)

  await loginPage.acessarPaginaLogin()

});

When('preencho usuário {string} e senha {string}', async function (usuario, senha) {

  await loginPage.login(usuario, senha)

});

Then('devo acessar o dashboard', async function () {

  await page.waitForURL('**/my/**')

});