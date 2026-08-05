const gabarito = [
  { id: 1, correta: "b" },
  { id: 2, correta: "c" },
  { id: 3, corretas: ["a", "c"] },
  { id: 4, corretas: ["b", "d"] },
  { id: 5, tipo: "dissertativa" },
];

document.getElementById("btn-form").addEventListener("click", function (event) {
  event.preventDefault();

  const divErros = document.getElementById("erros");
  const divResultado = document.getElementById("resultadoContainer");
  divResultado.style.display = "none";

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`feedback-q${i}`).innerHTML = "";
  }

  let questoesNaoRespondidas = [];
  let respostasUsuario = {};

  ["q1", "q2"].forEach((q) => {
    const selecionado = document.querySelector(`input[name="${q}"]:checked`);
    if (!selecionado) {
      questoesNaoRespondidas.push(q.replace("q", ""));
    } else {
      respostasUsuario[q] = selecionado.value;
    }
  });

  ["q3", "q4"].forEach((q) => {
    const marcados = Array.from(
      document.querySelectorAll(`input[name="${q}"]:checked`),
    ).map((cb) => cb.value);
    if (marcados.length === 0) {
      questoesNaoRespondidas.push(q.replace("q", ""));
    } else {
      respostasUsuario[q] = marcados;
    }
  });

  const textoQ5 = document.getElementById("q5").value.trim();
  respostasUsuario["q5"] = textoQ5;

  if (textoQ5 === "") {
    questoesNaoRespondidas.push("5");
  }

  if (questoesNaoRespondidas.length > 0) {
    questoesNaoRespondidas.sort((a, b) => a - b);
    divErros.innerHTML += ` A(s) questão(ões) <strong>${questoesNaoRespondidas.join(", ")}</strong> não foram respondidas.`;
    divErros.style.display = "block";
    window.scrollTo(0, 600);
    return;
  }

  const palavras = textoQ5.split(/\s+/).filter((p) => p.length > 0);
  if (palavras.length < 3) {
    divErros.innerHTML = `A questão 5 deve ter, no mínimo, 3 palavras. Você digitou apenas ${palavras.length}.`;
    divErros.style.display = "block";
    window.scrollTo(0, 600);
    return;
  }

  divErros.style.display = "none";
  let notaTotal = 0;

  gabarito.forEach((item) => {
    const qKey = `q${item.id}`;
    const feedbackEl = document.getElementById(`feedback-${qKey}`);

    if (item.tipo === "dissertativa") {
      notaTotal += 2;
      feedbackEl.innerHTML = `<span class="dissertativa-feedback">✓ Resposta enviada para correção do professor (+2 pts).</span>`;
    } else if (Array.isArray(item.corretas)) {
      const respUser = respostasUsuario[qKey] || [];

      const acertouTudo =
        respUser.length === item.corretas.length &&
        item.corretas.every((v) => respUser.includes(v));

      if (acertouTudo) {
        notaTotal += 2;
        feedbackEl.innerHTML = `<span class="correct">✓ Correto! Gabarito: [${item.corretas.join(", ")}] (+2 pts)</span>`;
      } else {
        feedbackEl.innerHTML = `<span class="incorrect">✗ Incorreto. Gabarito: [${item.corretas.join(", ")}] (+0 pts)</span>`;
      }
    } else {
      if (respostasUsuario[qKey] === item.correta) {
        notaTotal += 2;
        feedbackEl.innerHTML = `<span class="correct">✓ Correto! Gabarito: ${item.correta.toUpperCase()} (+2 pts)</span>`;
      } else {
        feedbackEl.innerHTML = `<span class="incorrect">✗ Incorreto. Gabarito: ${item.correta.toUpperCase()} (+0 pts)</span>`;
      }
    }
  });

  document.getElementById("pontuacao").innerText =
    `Nota Final: ${notaTotal.toFixed(1)} / 10.0`;

  document.getElementById("saida").textContent = JSON.stringify(
    respostasUsuario,
    null,
    2,
  );

  divResultado.style.display = "block";
  divResultado.scrollIntoView({ behavior: "smooth" });
});
