import { expect } from '@playwright/test'
export default class CalendarioPage {

constructor(page){

this.page = page

this.dashboardTab = 'text=Dashboard'
this.botaoNovoEvento = 'button:has-text("New event")'
this.tituloEvento = 'input[name="name"]'
this.botaoSalvar = 'button:has-text("Save")'

}

async irParaDashboard(){

await this.page.click(this.dashboardTab)

}

async clicarNovoEvento(){

await this.page.click(this.botaoNovoEvento)

}

async preencherEvento(titulo){

await this.page.fill(this.tituloEvento, titulo)

}

async salvarEvento(){

await this.page.click(this.botaoSalvar)

await this.page.waitForLoadState('networkidle')

}

async validarEventoCriado(titulo){

await this.page.waitForLoadState('networkidle')

await expect(this.page.locator(`text=${titulo}`).first()).toBeAttached()

}

async verificarEvento(titulo){

await this.page.click(`text=${titulo}`)

}

}