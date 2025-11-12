// areaAluno.js

document.addEventListener("DOMContentLoaded", () => {
  const flipBtn = document.getElementById("flipBtn");
  const card = document.getElementById("card");
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const nome1 = document.getElementById("alunoNome1");
  const nome2 = document.getElementById("alunoNome2");

  // Protege a página — só entra se estiver logado
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página!");
    window.location.href = "../html/Login.html";
    return;
  }

  // Atualiza o nome do aluno nas tabelas
  if (nome1) nome1.textContent = usuarioLogado.nome;
  if (nome2) nome2.textContent = usuarioLogado.nome;

  // Flip dos cards
  flipBtn.addEventListener("click", () => {
    card.classList.toggle("flipped");
    flipBtn.textContent = card.classList.contains("flipped")
      ? "Em andamento"
      : "Concluídos";
  });
});

function imprimirCertificado() {
  window.open("certificado.html", "_blank");
}
