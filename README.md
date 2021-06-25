![2560x1080](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb66a498c-2515-4254-a448-513a21d2e6b4%2FCapa_-_Notion_(3).png?table=block&id=8011b127-fe79-4183-be1e-fad96afe5663&width=2280&userId=598d24f2-b067-44c5-b150-77aa693ee446&cache=v2)
# Ignite - Node / Docker / Postgres
Este é uma projeto usado como modelo para estudo, o sistema será responsável por fazer o controle de uma locadora de carros, usando vários princípios de SOLID.

## Cadastro de Carro

**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar um carro.

**Regra de Negócios (RN)**
- [x] Não deve ser possível cadastrar uma carro com uma placa já existente.
- [x] O carro deve ser cadastrado por padrão com disponibilidade.
- [x] O usuário responsável pelo cadastro deve ser um administrador.

## Lista de Carros

**Requisitos Funcionais (RF)**
- [x] Deve ser possível listar todos os carros disponíveis.
- [x] Dever ser possível listar todos os carros disponíveis pelo nome da categoria.
- [x] Dever ser possível listar todos os carros disponíveis pelo nome da marca.
- [x] Dever ser possível listar todos os carros disponíveis pelo nome da carro.

**Regra de Negócios (RN)**
- [x] O usuário não precisa estár logado no sistema para buscar um carro.

## Cadastro de Especificação no Carro

**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma especificação para um carro.

**Regra de Negócios (RN)**
- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrativo.

## Cadastro de Imagens do Carro

**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar as imagens do carro

**Requisitos Não Funcionais (RNF)**
- [x] Utilizar o multer para upload de arquivos.

**Regra de Negócios (RN)**
- [x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser uma administrador.

## Aluguel de Carro

**Requisitos Funcionais (RF)**
- [x] Deve ser possível cadastrar uma aluguel.

**Regra de Negócios (RN)**
- [x] O aluguel deve ter duração mínima de 24 horas.
- [x] Não deve ser possível cadastrar uma aluguel caso já exista um em aberto para o mesmo usuário.
- [x] Não deve ser possível cadastrar uma aluguel caso já exista um em aberto para o mesmo carro.
- [x] O Usuário deve estar logado na aplicação.
- [x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

## Devolução de Carro

**Requisitos Funcionais (RF)**
- [x] Deve ser possível realizar a devolução de uma carro.

**Regra de Negócios (RN)**
- [x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- [x] Ao Realizar a devolução, o carro deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [x] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- [x] Caso haja multa, deverá ser somado ao total do aluguel.
- [x] O Usuário deve estar logado na aplicação.

## Listagem de alugueis para usuários

**Requisitos Funcionais (RF)**
- [x] Deve ser possível realizar a busca de todos os aluguéis para o usuário.

**Regra de Negócios (RN)**
- [x] O usuário deve estar logado na aplicação.

## Recuperar Senha

**Requisitos Funcionais (RF)**
- [x] Deve ser possível o usuário recuperar a senha informando o e-mail.
- [x] O usuário deve receber uma e-mail com o passo a passo para a recuperação de senha.
- [x] O usuário deve conseguir inserir uma nova senha.

**Regra de Negócios (RN)**
- [x] O usuário precisa inserir uma nova senha.
- [x] O link enviado para a recuperação deve expirar em 3 horas.

# Documentação da API On-line
Com o servidor rodando acesse o endereço http://localhost:3333/api-docs/ no seu browser e verifique as rotas disponíveis no sistema.

# Requisitos para a instalação
## Node
É necessário ter instalado na maquina o Node de da versão 12 ou a cima. https://nodejs.org/en/

## Docker
É necessário ter instalado o docker na versão 20.10.2 ou superior e o docker-compose na versão 1.28.5 ou superior https://www.docker.com/

# Como instalar do servidor em ambiente de teste.
(Em Breve)