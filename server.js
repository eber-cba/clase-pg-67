const { agregarEquipamiento, obtenerEquipamiento } = require("./equipamiento");
const express = require("express");
const app = express();
app.listen(3001, console.log("SERVIDOR ENCENDIDO"));
app.get("/equipamientos", async (req, res) => {
  const equipamiento = await obtenerEquipamiento();
  res.json(equipamiento);
});
