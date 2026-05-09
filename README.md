# Desafio de Login Com Validação de Credenciais

## Orientações: Pré-requisitos

Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

## Desafio

Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

## Testes

### Escreva 4 testes:

1) Sucesso
2) Credencial expirada
3) Usuario não encontrado
4) Senha incorreta para o usuário encontrado

### Exemplos:

- fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
- fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

## Como Executar o Projeto

Para executar o projeto, siga os passos abaixo:

### 1) Clone o repositório

Clone o projeto para sua máquina utilizando o comando:

```cmd
git clone <URL_DO_REPOSITORIO>
```

### 2) Abra o projeto em uma IDE

Abra o projeto utilizando uma IDE de sua preferência, como:

- Visual Studio Code

Exemplo utilizando o VS Code:

```cmd
code .
```

### 3) Instale as dependências

Execute o comando abaixo na raiz do projeto:

```cmd
npm install
```

### 4) Execute os testes

Execute o comando abaixo para rodar os testes automatizados do projeto:

```cmd
npm test
```

### 5) Gerar relatório dos testes

Execute o comando abaixo para gerar o relatório HTML dos testes:

```cmd
npm run test:report
```

O relatório será gerado no diretório:

```text
mochawesome-report/
```

Para visualizar o relatório, abra o arquivo:

```text
mochawesome-report/mochawesome.html
```

## Estrutura do Projeto

```text
DESAFIO-CONTROLE-ACESSOS-SITE/
├── mochawesome-report/
│   ├── assets/
│   ├── mochawesome.html
│   └── mochawesome.json
├── node_modules/
├── src/
│   └── controleLoginSite.js
├── test/
│   └── controleLoginSite.test.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Observação sobre a implementação

Durante a implementação do desafio, identifiquei uma divergência entre a descrição funcional e os cenários de teste solicitados.

No enunciado do desafio, foi especificado que:

> "...`A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.`"

Isso define um único retorno, `"Credenciais incorretas"` para os dois cenários:

- Um email inexistente
- Uma senha incorreta para um email existente

Entretanto, na seção de testes, foram solicitados cenários separados para os seguintes testes:

3. Usuário não encontrado
4. Senha incorreta para o usuário encontrado

Seguindo o comportamento descrito no desafio, optei por implementar a função retornando `"Credenciais incorretas"` em ambos os casos, mantendo o que foi descrito no requisito funcional.

> Observação: Essa abordagem também segue uma prática comum de segurança em autenticação, evitando diferenciar os erros para não facilitar a listagem de usuários válidos no sistema.