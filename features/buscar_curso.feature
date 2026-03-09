Feature: Buscar cursos

Scenario: Listar cursos em progresso
  Given que estou logado no Moodle
  When acesso a página My courses
  And filtro cursos por "In progress"
  Then devo ver cursos em progresso listados