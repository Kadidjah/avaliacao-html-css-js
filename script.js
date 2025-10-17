document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const total = 1; // número de questões objetivas corrigidas automaticamente
  const respostas = document.querySelectorAll("input[type='radio']:checked");

  respostas.forEach((resposta) => {
    score += parseInt(resposta.value);
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Você acertou ${score} de ${total} questões objetivas.`;

  // Aqui você pode adicionar lógica para enviar a resposta dissertativa para um servidor ou salvar localmente
});
