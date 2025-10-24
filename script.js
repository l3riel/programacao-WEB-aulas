console.log("Script carregado com sucesso!");

const titulo = document.getElementById("titulo");
titulo.textContent = "Texto alterado pelo JS";

const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  alert("Você clicou no botão!");
});

const nome = "Gabriel";
console.log("Nome:", nome);

let idade = 18;
console.log("Idade inicial:", idade);

idade = 26;
console.log("Idade atualizada:", idade);

const produto = {
  nome: "Notebook",
  valor: 3500
};

produto.valor = 3200;
console.log("Produto após modificação:", produto);