const express = require('express');
const User = require('./model/User');

const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const response = await User.create({ firstName, lastName, email, password });
  if(response.error) return res.status(400).json(response);
  res.status(201).json(response.obj);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});