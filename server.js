// server.js
const fastify = require('fastify')({ logger: true });
const { encrypt, decrypt, encryptFile, decryptFile } = require('./crypto');
const path = require('path');
const fs = require('fs');
const util = require('util');
const pump = util.promisify(require('stream').pipeline);

// Verifica se a pasta "uploads" existe e a cria, se não existir
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

fastify.register(require('@fastify/multipart'));

// Rota para documentação simples
fastify.get('/', (request, reply) => {
  reply.type('text/html').send(`
    <html>
      <head>
        <title>ADG Crypto API</title>
      </head>
      <body>
        <h1>ADG Crypto API</h1>
        <p>Bem-vindo à API de criptografia e descriptografia!</p>
        <h2>Endpoints</h2>
        <ul>
          <li><strong>POST /encrypt</strong> - Criptografa um texto. Envie um JSON com o campo <code>text</code>.</li>
          <li><strong>GET /encrypt?text=SEU_TEXTO</strong> - Criptografa um texto. Envie o texto como um parâmetro de consulta.</li>
          <li><strong>POST /decrypt</strong> - Descriptografa um texto. Envie um JSON com o campo <code>text</code>.</li>
          <li><strong>GET /decrypt?text=SUA_TEXT_CRIPTOGRAFADA</strong> - Descriptografa um texto. Envie o texto criptografado como um parâmetro de consulta.</li>
          <li><strong>POST /encrypt-file</strong> - Criptografa um arquivo. Faça upload do arquivo.</li>
          <li><strong>POST /decrypt-file</strong> - Descriptografa um arquivo. Faça upload do arquivo criptografado.</li>
        </ul>
        <h2>Como usar</h2>
        <p>Para criptografar ou descriptografar um texto, use os endpoints correspondentes. Para arquivos, faça upload e receberá o arquivo criptografado ou descriptografado em resposta.</p>
      </body>
    </html>
  `);
});

// Rota para criptografar texto via POST
fastify.post('/encrypt', async (request, reply) => {
  const { text } = request.body;

  if (!text) {
    return reply.status(400).send({ error: 'Parâmetro inválido. Envie "text".' });
  }

  const encryptedText = encrypt(text);
  return { encryptedText };
});

// Rota para criptografar texto via GET (usando query)
fastify.get('/encrypt', async (request, reply) => {
  const { text } = request.query;

  if (!text) {
    return reply.status(400).send({ error: 'Parâmetro inválido. Envie "text".' });
  }

  const encryptedText = encrypt(text);
  return { encryptedText };
});

// Rota para descriptografar texto via POST
fastify.post('/decrypt', async (request, reply) => {
  const { text } = request.body;

  if (!text) {
    return reply.status(400).send({ error: 'Parâmetro inválido. Envie "text".' });
  }

  const decryptedText = decrypt(text);
  return { decryptedText };
});

// Rota para descriptografar texto via GET (usando query)
fastify.get('/decrypt', async (request, reply) => {
  const { text } = request.query;

  if (!text) {
    return reply.status(400).send({ error: 'Parâmetro inválido. Envie "text".' });
  }

  const decryptedText = decrypt(text);
  return { decryptedText };
});

// Rota para criptografar arquivo
fastify.post('/encrypt-file', async (request, reply) => {
  const data = await request.file();
  const fileName = data.filename;
  const uploadPath = path.join(uploadsDir, fileName);
  const encryptedFilePath = path.join(uploadsDir, `encrypted_${fileName}`);

  // Salva o arquivo recebido
  await pump(data.file, fs.createWriteStream(uploadPath));

  // Criptografa o arquivo
  encryptFile(uploadPath, encryptedFilePath);

  return reply.sendFile(`encrypted_${fileName}`, uploadsDir);
});

// Rota para descriptografar arquivo
fastify.post('/decrypt-file', async (request, reply) => {
  const data = await request.file();
  const fileName = data.filename;
  const uploadPath = path.join(uploadsDir, fileName);
  const decryptedFilePath = path.join(uploadsDir, `decrypted_${fileName}`);

  // Salva o arquivo recebido
  await pump(data.file, fs.createWriteStream(uploadPath));

  // Descriptografa o arquivo
  decryptFile(uploadPath, decryptedFilePath);

  return reply.sendFile(`decrypted_${fileName}`, uploadsDir);
});

// Servir arquivos estáticos da pasta "uploads"
fastify.register(require('@fastify/static'), {
  root: uploadsDir,
  prefix: '/uploads/',
});

// Iniciar o servidor Fastify
const start = async () => {
  try {
    await fastify.listen({ port: 80, host: "0.0.0.0" });
    console.log('Servidor rodando na porta 80');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
