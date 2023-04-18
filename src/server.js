import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagen de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário')
  }
  res.end('Hello World');
})

server.listen(3333)