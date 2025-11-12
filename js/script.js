let index = 0;
const banners = document.querySelectorAll(".banners");

function showBanner() {
  banners.forEach((banner, i) => {
    banner.classList.remove("active");
    if (i === index) {
      banner.classList.add("active");
    }
  });
  index = (index + 1) % banners.length;
}

showBanner();
setInterval(showBanner, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.querySelector(".btn-login");
  const btnAreaAluno = document.querySelector(".btn-areadoaluno");

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuarioLogado) {
    if (btnAreaAluno) btnAreaAluno.style.display = "inline-block";
    if (btnLogin) btnLogin.style.display = "none";
  } else {
    if (btnAreaAluno) btnAreaAluno.style.display = "none";
    if (btnLogin) btnLogin.style.display = "inline-block";
  }
});
