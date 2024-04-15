document.getElementById("removerForm").onsubmit = function (e) {
  e.preventDefault();
  const palavra = document.getElementById("palavra").value;
  fetch(`/remover?palavra=${encodeURIComponent(palavra)}`, {
    method: "DELETE",
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};
