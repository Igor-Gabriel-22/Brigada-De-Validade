// areaAluno.js

document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const nome1 = document.getElementById("alunoNome1");
  const nome2 = document.getElementById("alunoNome2");
  const nome3 = document.getElementById("alunoNome3");

  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página!");
    window.location.href = "../html/Login.html";
    return;
  }

  if (nome1) nome1.textContent = usuarioLogado.nome;
  if (nome2) nome2.textContent = usuarioLogado.nome;
  if (nome3) nome3.textContent = usuarioLogado.nome;

});

function imprimirCertificado() {
  window.open("certificado.html", "_blank");
}
