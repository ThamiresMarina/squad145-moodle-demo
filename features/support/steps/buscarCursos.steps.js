import { When, Then } from "@cucumber/cucumber"
import BuscarCursosPage from "../pages/BuscarCursosPage.js"

let buscarCursosPage

When("acesso a página My courses", async function () {

buscarCursosPage = new BuscarCursosPage(this.page)

await buscarCursosPage.irParaMyCourses()

})

When('filtro cursos por {string}', async function (filtro) {

await buscarCursosPage.filtrarCursos(filtro)

})

Then("devo ver cursos em progresso listados", async function () {

await buscarCursosPage.validarCursosVisiveis()

})