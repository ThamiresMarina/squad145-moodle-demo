# 🎯 Test Automation - Moodle Demo

![QA Automation Tests](https://github.com/ThamiresMarina/squad145-moodle-demo/actions/workflows/playwright.yml/badge.svg)

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-JavaScript-yellow)
![Status](https://img.shields.io/badge/Test%20Status-Passing-success)

Projeto de **automação de testes E2E** utilizando **Playwright + Cucumber (BDD)** aplicado à plataforma **Moodle Demo**.

Este projeto demonstra a implementação de **Boas Práticas de Automação de Testes**, incluindo:

* BDD com Gherkin
* Page Object Model
* Hooks para setup/teardown
* Estrutura escalável
* Geração de relatório HTML

---

# 🧠 Tecnologias utilizadas

* **Node.js**
* **Playwright**
* **Cucumber**
* **JavaScript**
* **HTML Reports**

---

# 📚 Aplicação testada

Site de demonstração do Moodle:

🔗 https://school.moodledemo.net

Credenciais utilizadas:

```text
Usuário: teacher
Senha: moodle25
```

---

# 🧪 Cenários Automatizados

## 1️⃣ Criar evento no calendário

Fluxo automatizado:

* Login na aplicação
* Acessar Dashboard
* Criar novo evento
* Salvar evento
* Validar evento criado

Arquivo:

```text
features/criar_evento.feature
```

---

## 2️⃣ Atribuir nota a um aluno

Fluxo automatizado:

* Login
* Acessar Dashboard
* Abrir atividade
* Clicar em **Grade**
* Inserir nota **100**
* Salvar alterações
* Validar mensagem de sucesso

Arquivo:

```text
features/dar_nota_aluno.feature
```

---

## 3️⃣ Filtrar cursos em progresso

Fluxo automatizado:

* Login
* Acessar **My Courses**
* Selecionar filtro **In progress**
* Validar cursos exibidos

Arquivo:

```text
features/buscar_curso.feature
```

---

# 🏗 Estrutura do Projeto

```bash
features
│
├── criar_evento.feature
├── dar_nota_aluno.feature
├── buscar_curso.feature
│
└── support
    │
    ├── pages
    │   ├── LoginPage.js
    │   ├── CalendarioPage.js
    │   ├── NotaAlunoPage.js
    │   └── BuscarCursosPage.js
    │
    ├── steps
    │   ├── login.steps.js
    │   ├── criarEvento.steps.js
    │   ├── darNota.steps.js
    │   └── buscarCursos.steps.js
    │
    └── hooks.js
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/squad145-moodle_demo.git
```

Entre no diretório:

```bash
cd squad145-moodle_demo
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores do Playwright:

```bash
npx playwright install
```

---

# ▶️ Executar os testes

Executar todos os cenários:

```bash
npx cucumber-js
```

Executar cenário específico:

```bash
npx cucumber-js features/criar_evento.feature
```

---

# 📊 Relatório HTML

Executar testes gerando relatório:

```bash
npm run test:report
```

Abrir relatório:

```bash
reports/cucumber-report.html
```

---

# 📈 Boas práticas aplicadas

✔ Page Object Model
✔ Estrutura escalável
✔ Separação de responsabilidades
✔ Reutilização de steps
✔ Hooks para inicialização do browser
✔ Geração de relatórios

---

# 👩‍💻 Autor

Projeto desenvolvido para prática de **Automação de Testes com Playwright + Cucumber**.

---

# ⭐ Possíveis melhorias futuras

* Execução em **CI/CD (GitHub Actions)**
* Captura de **screenshots em falhas**
* Testes paralelos
* Integração com **Allure Report**
* Execução em múltiplos browsers

---
