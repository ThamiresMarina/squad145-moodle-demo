import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/LoginPage.js";
import CalendarioPage from "../pages/CalendarioPage.js";

let loginPage;
let calendarioPage;

Given("que estou logado no Moodle", async function () {

loginPage = new LoginPage(this.page);
calendarioPage = new CalendarioPage(this.page);

await loginPage.acessarPaginaLogin();
await loginPage.login("teacher","moodle25");

});

When("acesso o Dashboard", async function () {

await calendarioPage.irParaDashboard();

});

When('clico em "New event"', async function () {

await calendarioPage.clicarNovoEvento();

});

When('preencho o título do evento', async function () {

const tituloEvento = `teste-qa-${Date.now()}`

this.tituloEvento = tituloEvento

await calendarioPage.preencherEvento(tituloEvento)

});

When("salvo o evento", async function () {

await calendarioPage.salvarEvento();

});

Then('o evento deve aparecer no calendário', async function () {

await calendarioPage.validarEventoCriado(this.tituloEvento)

});