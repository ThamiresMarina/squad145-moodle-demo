export default class LoginPage {

  constructor(page) {

    this.page = page

    this.usernameInput = '#username'
    this.passwordInput = '#password'
    this.loginButton = '#loginbtn'

    this.url = 'https://school.moodledemo.net/login/index.php?loginredirect=1'
  }

  async acessarPaginaLogin() {
    await this.page.goto(this.url)
    await this.page.waitForSelector(this.usernameInput)
  }

  async login(username, password) {

    await this.page.fill(this.usernameInput, username)
    await this.page.fill(this.passwordInput, password)

    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click(this.loginButton)
    ])

  }

}