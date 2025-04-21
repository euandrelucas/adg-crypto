<h1 align="center">🔐 ADG Crypto</h1>

<p align="center">
  Uma API de criptografia autoral construída com Node.js + Fastify, simples de usar e pronta para produção.
</p>

<p align="center">
  <a href="https://github.com/euandrelucas/adg-crypto"><img src="https://img.shields.io/badge/github-euandrelucas/adg--crypto-8b5cf6?style=for-the-badge&logo=github"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/feito%20com-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="https://www.fastify.io/"><img src="https://img.shields.io/badge/server-Fastify-black?style=for-the-badge&logo=fastify&logoColor=white"></a>
  <a href="https://crypto.andrepaiva.dev"><img src="https://img.shields.io/badge/demo-online-blueviolet?style=for-the-badge"></a>
</p>

---

## 📌 Sobre

**ADG Crypto** é uma API HTTP para criptografia de **textos** e **arquivos**, construída com foco em performance e simplicidade.

Ela oferece endpoints rápidos e seguros para operações de criptografia e descriptografia, sendo ideal para aplicações que lidam com dados sensíveis.

---

## 🚀 Começando

### Clonar o projeto
```bash
git clone https://github.com/euandrelucas/adg-crypto.git
cd adg-crypto
```

### Instalar dependências
```bash
npm install
```

### Executar o servidor
```bash
npm start
```

> O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📡 Endpoints

### 🔸 Criptografar texto

**POST** `/encrypt`

```json
{ "text": "DreamTeam" }
```

```bash
curl -X POST http://localhost:3000/encrypt \
     -H "Content-Type: application/json" \
     -d '{"text": "DreamTeam"}'
```

**GET** `/encrypt?text=DreamTeam`

---

### 🔸 Descriptografar texto

**POST** `/decrypt`

```json
{ "encryptedText": "TEXTO_CRIPTOGRAFADO" }
```

```bash
curl -X POST http://localhost:3000/decrypt \
     -H "Content-Type: application/json" \
     -d '{"encryptedText": "TEXTO_CRIPTOGRAFADO"}'
```

**GET** `/decrypt?encryptedText=TEXTO_CRIPTOGRAFADO`

---

### 🔸 Criptografar arquivo

**POST** `/encrypt-file`  
Envie um arquivo via `multipart/form-data`. O arquivo criptografado será retornado.

---

### 🔸 Descriptografar arquivo

**POST** `/decrypt-file`  
Envie um arquivo criptografado via `multipart/form-data`. O arquivo original será retornado.

---

## 📚 Documentação

Acesse diretamente no navegador:  
📄 [http://localhost:3000](http://localhost:3000)

---

## ⚠️ Nota

O arquivo `crypto.js` foi adicionado ao `.gitignore` por conter as funções internas de criptografia.  
Ele está disponível apenas na instância de demonstração:  
🔗 [https://crypto.andrepaiva.dev](https://crypto.andrepaiva.dev)

---

## 🤝 Contribuições

Contribuições são bem-vindas!  
Abra uma issue ou envie um pull request com melhorias ou novas ideias.

---

## 🪪 Licença

Distribuído sob a licença ISC.  
Veja o arquivo [`LICENSE`](./LICENSE) para mais detalhes.

---

## 🧑‍💻 Autor

Desenvolvido com 💙 por [André Lucas](https://github.com/euandrelucas)
