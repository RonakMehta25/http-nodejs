import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World from India!');
  res.end();
}).listen(process.env.PORT);
