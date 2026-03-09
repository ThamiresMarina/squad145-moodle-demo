Feature: Dar nota para aluno

Scenario: Professor atribui nota a uma atividade

Given que estou logado no Moodle
When acesso o Dashboard
And acesso o assignment "Languages of Love"
And clico em "Grade"
And atribuo a nota "100"
And clico em "Save changes"
Then devo ver a mensagem "The changes to the grade and feedback were saved"