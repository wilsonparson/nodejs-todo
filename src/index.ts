import express from 'express';
import bodyParser from 'body-parser';
import { Todo } from './types';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  res.send('Todos');
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  console.log(todo);
  res.send(`Todo created: ${JSON.stringify(todo)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
