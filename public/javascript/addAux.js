document.getElementById("adicionarForm").onsubmit = function (e) {
  e.preventDefault();
  const palavra = document.getElementById("palavra").value;
  const valor = document.getElementById("valor").value;
  fetch("/adicionar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ palavra, valor }),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};
