import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'hello World' });
});

app.listen(3333, () => console.log('🏁 Server is Running 🏁'));
