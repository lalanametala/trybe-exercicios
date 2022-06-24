const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  //validações
  if(!firstName) return {
	  error: true,
	  message: "O campo 'firstName' é obrigatório"
  };

  if(!lastName) return {
	  error: true,
	  message: "O campo 'lastName' é obrigatório"
  };

  if(!email) return {
	  error: true,
	  message: "O campo 'email' é obrigatório"
  };

  if(!password) return {
	  error: true,
	  message: "O campo 'password' é obrigatório"
  };

  if(password.length < 6) return {
	  error: true,
	  message: "O campo 'password' deve ter pelo menos 6 caracteres"
  };

  const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  const response = await connection.query(sql, [firstName, lastName, email, password]);

  const [{ insertId }] = response;

  return {
    error: false,
    obj: {
      id: insertId, 
      firstName, 
      lastName,
      email,
    }
  };
};

module.exports = {
  create,
}