import { expect } from "@playwright/test"

export default class BuscarCursosPage {

constructor(page){
this.page = page
}

async irParaMyCourses(){

await this.page.click('text=My courses')

}

async filtrarCursos(filtro){

await this.page.click('#groupingdropdown')

await this.page.click(`text=${filtro}`)

}

async validarCursosVisiveis(){

const cursos = this.page.locator('[data-region="course-content"]')

await expect(cursos.first()).toBeVisible()

}

}