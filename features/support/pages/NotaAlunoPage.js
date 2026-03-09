import { expect } from '@playwright/test'

export default class NotaAlunoPage {

constructor(page){

this.page = page

this.assignmentLink = 'text=Languages of Love'
this.botaoGrade = 'text=Grade'

this.campoComentario = 'textarea[name="content"]'
this.campoNota = 'input[name="grade"]'

this.botaoSalvar = 'button[name="savechanges"]'

this.mensagemSucesso = '.toast-message'

}

async acessarAssignment(nome){

await this.page.locator('.event-name a', { hasText: nome }).first().click()

}

async clicarGrade(){

await this.page.locator('a.btn-primary[href*="grader"]').click()

}


async escreverNota(nota){

await this.page.fill(this.campoNota, nota)

}



async salvarNota(){

await this.page.click(this.botaoSalvar)

}

async validarMensagemSucesso(){

await expect(this.page.locator(this.mensagemSucesso))
.toContainText('The changes to the grade and feedback were saved')

}

}