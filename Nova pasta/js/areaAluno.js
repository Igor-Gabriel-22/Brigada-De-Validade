document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const nome1 = document.getElementById("alunoNome1");
  const nome2 = document.getElementById("alunoNome2");
  const nome3 = document.getElementById("alunoNome3");

  const btn1 = document.querySelector('button[onclick="imprimirCertificado1()"]');
  const btn2 = document.querySelector('button[onclick="imprimirCertificado2()"]');
  const btn3 = document.querySelector('button[onclick="imprimirCertificado3()"]');

  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página!");
    window.location.href = "../html/Login.html";
    return;
  }

  if (nome1) nome1.textContent = usuarioLogado.nome;
  if (nome2) nome2.textContent = usuarioLogado.nome;
  if (nome3) nome3.textContent = usuarioLogado.nome;

  const curso1 = localStorage.getItem("cursoPereciveisConcluido");
  const curso2 = localStorage.getItem("cursoNaoPereciveisConcluido");
  const curso3 = localStorage.getItem("cursoNaoAlimenticiosConcluido");

  if (!curso1) {
    btn1.disabled = true;
    btn1.textContent = "Conclua o quiz primeiro";
  }

  if (!curso2) {
    btn2.disabled = true;
    btn2.textContent = "Conclua o quiz primeiro";
  }

  if (!curso3) {
    btn3.disabled = true;
    btn3.textContent = "Conclua o quiz primeiro";
  }
});

function imprimirCertificado1() {
  window.open("certificado1.html", "_blank");
}

function imprimirCertificado2() {
  window.open("certificado2.html", "_blank");
}

function imprimirCertificado3() {
  window.open("certificado3.html", "_blank");
}
