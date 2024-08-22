// Imports Pool from pg
const { Pool } = require("pg");

// DB client info
const pool = new Pool({
  user: "postgres",
  password: "Miki1305.com",
  host: "localhost",
  database: "employees_db",
});

// Connects the client to the DB
async function connectToDatabase() {
  const tempClient = await pool.connect();
  return tempClient;
}

// Disconnects client from the DB
async function disconnectFromDatabase(tempClient) {
  await tempClient.release(true);
}

// Exports the pool and methods to connect and disconect from the database
module.exports = { connectToDatabase, disconnectFromDatabase, pool };
