import { createServer } from 'node:http';
import fs from 'node:fs/promises';

const writeToFile = async (data) => {
    try {
        await fs.writeFile('data.txt', data, {flag: 'a+'});
    } catch (e) {
        console.log(e)
    }
}
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer( async (req, res) => {
  console.log('Received request...', req.url, req.method);
  
  if(req.url == '/') {
    if(req.method == 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', "*");
      res.end("Mithilesh");
      // console.log(res)
    }
    if(req.method == 'OPTIONS') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'appliction/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
      res.setHeader('Access-Control-Allow-Methods', "POST, GET, OPTIONS");
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.end('OK');
    }
    if(req.method == 'POST') {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', async () => {
        try {
          const userData = JSON.parse(data);
          const {username, password} = userData;
          console.log('Username...', username);
          console.log('Password...', password);
          await writeToFile(username);
          await writeToFile(password);
          let surname = 'Kumar';
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Access-Control-Allow-Origin', "*");
          res.end(JSON.stringify({surname}));
        } catch (e) {
          console.error('Error parsing JSON: ', e.message);
          res.writeHead(400, { 'Content-Type': 'text/plain'});
          res.end('Invalid JSON data');
        }
      })
    }
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});