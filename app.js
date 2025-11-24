const fs = require("fs");

function listarUsuarios() {
  const data = fs.readFileSync("./crud/usuarios.json", "utf8");
  console.log(JSON.parse(data));
}

listarUsuarios();







console.log("Funcionalidad nueva4");
console.log("Funcionalidad nueva3");
console.log("Funcionalidad nueva2");
console.log("Funcionalidad nueva");
