const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Captura os dados do formulário
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;
  const email = document.getElementById("email").value;
  const orientador = document.getElementById("orientador").value;
  const cpf = document.getElementById("cpf").value;
  const estagio = document.getElementById("estagio").value;

  // Aqui, você pode processar os dados (formatar CPF, etc.)

  // Envia os dados para a aplicação de destino
  // Use fetch ou axios para enviar os dados para a API

  // Exibe uma mensagem de sucesso
  alert("Formulário enviado com sucesso!");
});