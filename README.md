# Projeto Spring com React Semana DevsSuperior 5
* 1 Etapa: **FrontEnd com React implantado no Netlify.**
* 2 Etapa: **BackEnd com SpringBoot implantado no Heroku.**
#### Prévia destas etapas com dados státicos:
![This is an image](https://github.com/LucasAlvesDaCosta/imagens/blob/main/telaVendas.png)

### 
* 3 Etapa: **Backend spring integrado ao Frontend do react. Dados dinâmicos e paginação completa.**

![This is an image](https://github.com/LucasAlvesDaCosta/imagens/blob/main/TelaBack%2BFront.png)

## Ferramentas utilizadas:

- Curl
- Git
- Java JDK 11
- Maven
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- Node & NPM
- Yarn
- VS Code
##
## FrontEnd
- projeto Spring Boot no `Spring Initializr` com as seguintes dependências:
  - Web
  - JPA
  - H2
  - Postgres
  - Security
  
 ###  Yarn - Gerenciamento de dependência:
 
 -- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios
  - Bootstrap e CSS
   -  Apex Charts
   
 #### DonutChart integration
 #### BarChart integration
 #### DataTable integration
 #### Pagination
 
##
## BackEnd:

#### Modelo conceitual
![Image](https://github.com/LucasAlvesDaCosta/imagens/blob/main/sds3-mc.png "Modelo conceitual")

### Padrão camadas adotado
![Image](https://github.com/LucasAlvesDaCosta/imagens/blob/main/camadas.png "Padrão camadas")

- Repositories
- DTO's
- Service
- Controller

### Busca paginada de vendas

- Pageable
- page, size, sort
- Evitando interações repetidas ao banco de dados

### Buscas agrupadas (GROUP BY)

- Total de vendas por vendedor
- Taxa de sucesso por vendedor

# Projeto finalizado, [Link do projeto no Netlify](https://dsvendas-lucas-alves.netlify.app/)
@devSuperior
