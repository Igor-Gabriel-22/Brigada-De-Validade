// logout.js

document.addEventListener("DOMContentLoaded", () => {
  const btnLogout = document.getElementById("btnLogout");

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      const confirmar = confirm("Deseja realmente sair da sua conta?");
      if (confirmar) {
        localStorage.removeItem("usuarioLogado");
        alert("Você saiu da sua conta.");
        window.location.href = "../html/Login.html";
      }
    });
  }
});
