const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "0529",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const agregarEquipamiento = async (nombre) => {
  const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)";
  const values = [nombre];
  const result = await pool.query(consulta, values);
  console.log("equipamiento agregado");
};

const obtenerEquipamiento = async () => {
  const { rows } = await pool.query("SELECT * FROM equipamiento");
  console.log(rows);
  return rows;
};
module.exports = { agregarEquipamiento, obtenerEquipamiento };
