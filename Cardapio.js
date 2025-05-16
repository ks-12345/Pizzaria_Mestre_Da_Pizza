let cadastro = [];

function addpizza() {
  const sabor = document.getElementById("sabor").value;
  const Ingrediente = document.getElementById("Ingrediente").value;
  const valor = document.getElementById("valor").value;
  
  if (sabor && Ingrediente) {
    cadastro.push({ sabor, Ingrediente });
    document.getElementById("sabor").value = "";
    document.getElementById("Ingrediente").value = "";
    document.getElementById("valor").value = "";
    document.getElementById(
      "mensangem"
    ).innerHTML = `Pizza ${sabor} Adicionada com Sucesso ao Cardapio!`;
  } else {
   document.getElementById(
     "mensangem"
   ).innerHTML = `<strong> Campo Vazio</strong>`;
  }
}
