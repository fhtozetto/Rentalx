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