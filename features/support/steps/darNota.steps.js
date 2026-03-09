import { When, Then } from "@cucumber/cucumber";
import NotaAlunoPage from "../pages/NotaAlunoPage.js";

let notaAlunoPage

When('acesso o assignment {string}', async function (assignment) {

notaAlunoPage = new NotaAlunoPage(this.page)

await notaAlunoPage.acessarAssignment(assignment)

})

When('clico em "Grade"', async function () {

await notaAlunoPage.clicarGrade()

})


When('atribuo a nota {string}', async function (nota) {

await notaAlunoPage.escreverNota(nota)

})


When('clico em "Save changes"', async function () {

await notaAlunoPage.salvarNota()

})

Then('devo ver a mensagem {string}', async function (mensagem) {

await notaAlunoPage.validarMensagemSucesso(mensagem)

})