Feature: Criar evento no calendário

Scenario: Criar evento com sucesso

Given que estou logado no Moodle
When acesso o Dashboard
And clico em "New event"
And preencho o título do evento
And salvo o evento
Then o evento deve aparecer no calendário