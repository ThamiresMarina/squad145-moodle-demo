Feature: Fazer login

Scenario: Login com sucesso

Given que estou na página de login do Moodle
When preencho usuário "teacher" e senha "moodle25"
Then devo acessar o dashboard

