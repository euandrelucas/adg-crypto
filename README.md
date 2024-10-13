# ADG Crypto

ADG Crypto é uma API de criptografia autoral que permite criptografar e descriptografar textos e arquivos. O projeto foi desenvolvido utilizando Node.js e Fastify, oferecendo um desempenho eficiente e uma interface fácil de usar.

## Funcionalidades

- Criptografia e descriptografia de textos via endpoints HTTP.
- Criptografia e descriptografia de arquivos.
- Documentação simples acessível através da rota `/`.

## Demonstração

Uma versão de demonstração do código pode ser encontrada em [crypto.andrepaiva.dev](http://crypto.andrepaiva.dev).

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/adg-crypto.git
   cd adg-crypto
```

2. **Instale as dependências**:

   ```bash
   npm install
   ```
3. **Execute o servidor**:

   ```bash
   npm start
   ```
4. O servidor estará disponível em `http://localhost:3000`.

## Uso

### Endpoints

- **Criptografar texto**:

  - **POST** `/encrypt`

    - **Corpo**: `{"text": "SEU_TEXTO"}`
    - **Exemplo de requisição**:
      ```bash
      curl -X POST http://localhost:3000/encrypt -H "Content-Type: application/json" -d '{"text": "DreamTeam"}'
      ```
  - **GET** `/encrypt?text=SEU_TEXTO`

    - **Exemplo de requisição**:
      ```bash
      curl -X GET "http://localhost:3000/encrypt?text=DreamTeam"
      ```
- **Descriptografar texto**:

  - **POST** `/decrypt`

    - **Corpo**: `{"encryptedText": "TEXTO_CRIPTOGRAFADO"}`
    - **Exemplo de requisição**:
      ```bash
      curl -X POST http://localhost:3000/decrypt -H "Content-Type: application/json" -d '{"encryptedText": "TEXTO_CRIPTOGRAFADO"}'
      ```
  - **GET** `/decrypt?encryptedText=TEXTO_CRIPTOGRAFADO`

    - **Exemplo de requisição**:
      ```bash
      curl -X GET "http://localhost:3000/decrypt?encryptedText=TEXTO_CRIPTOGRAFADO"
      ```
- **Criptografar arquivo**:

  - **POST** `/encrypt-file`
    - Faça o upload do arquivo.
    - O arquivo criptografado será retornado.
- **Descriptografar arquivo**:

  - **POST** `/decrypt-file`
    - Faça o upload do arquivo criptografado.
    - O arquivo descriptografado será retornado.

### Documentação

Acesse a documentação simples da API através do navegador em `http://localhost:3000/`.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Abra uma issue ou envie um pull request!

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Nota

O arquivo `crypto.js` está incluído no `.gitignore`, portanto não estará presente no repositório. As funções de criptografia podem ser vistas na versão de demonstração no link fornecido acima.

