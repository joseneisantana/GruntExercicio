function exibirInformacoes() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
  
    // Construir a mensagem a ser exibida
    var mensagem = `
      <h2>Informações Pessoais</h2>
      <p><strong>Nome Completo:</strong> ${nome}</p>
      <p><strong>Endereço:</strong> ${endereco}</p>
      <p><strong>CPF:</strong> ${cpf}</p>
      <p><strong>RG:</strong> ${rg}</p>
    `;
  
    // Exibir a mensagem no elemento infoContainer
    var infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = mensagem;
  }
  