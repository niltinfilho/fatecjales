const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const button = document.getElementById("button");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const pwRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{6,10}$/;
let nomeValidado = false;
let telefoneValidado = false;
let emailValidado = false;
let senhaValidado = false;
let confSenhaValidado = false;

function setError(index) {
  campos[index].style.border = "2px solid var(--red)";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function showpw(key) {
  if (key == "senha") {
    document.getElementById("senha").type = "text";
  } else if (key == "confirmarSenha") {
    document.getElementById("confirmarSenha").type = "text";
  }
}

function hidepw(key) {
  if (key == "senha") {
    document.getElementById("senha").type = "password";
  } else if (key == "confirmarSenha") {
    document.getElementById("confirmarSenha").type = "password";
  }
}

function mascaraDeTelefone(telefone) {
  const numeroAtual = telefone.value;
  if (telefoneValidate(telefone)) {
    let numeroAjustado = numeroAtual.replace(/\D+/g, "").trim();
    const hasDDD = numeroAjustado.length === 10 || numeroAjustado.length === 11;

    if (hasDDD) {
      const ddd = numeroAjustado.slice(0, 2);
      numeroAjustado = numeroAjustado.slice(2);
      const isCelular = numeroAjustado.length === 9;

      if (isCelular) {
        const parte1 = numeroAjustado.slice(0, 5);
        const parte2 = numeroAjustado.slice(5, 9);
        numeroAjustado = `(${ddd}) ${parte1}-${parte2}`;
      } else {
        const parte1 = numeroAjustado.slice(0, 4);
        const parte2 = numeroAjustado.slice(4, 8);
        numeroAjustado = `(${ddd}) ${parte1}-${parte2}`;
      }
    } else {
      const isCelular = numeroAjustado.length === 9;
      if (isCelular) {
        const parte1 = numeroAjustado.slice(0, 5);
        const parte2 = numeroAjustado.slice(5, 9);
        numeroAjustado = `${parte1}-${parte2}`;
      } else {
        const parte1 = numeroAjustado.slice(0, 4);
        const parte2 = numeroAjustado.slice(4, 8);
        numeroAjustado = `${parte1}-${parte2}`;
      }
    }
    telefone.value = numeroAjustado;
  }
}

function nameValidate() {
  const index = 0;
  const valor = campos[index].value;
  if (valor.length > 0 && valor.length < 3) {
    setError(index);
    validaTodosCampos("nomeInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("nomeValido");
    return true;
  }
}

function telefoneValidate(telefone) {
  const index = 1;
  telefone.value = telefone.value.replace(/\D+/g, "").trim();
  telefone.maxLength = 11;
  if (telefone.value.length > 0 && telefone.value.length < 8) {
    setError(index);
    validaTodosCampos("telefoneInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("telefoneValido");
    return true;
  }
}

function emailValidate() {
  const index = 2;
  if (campos[index].value.length > 0 && !emailRegex.test(campos[index].value)) {
    setError(index);
    validaTodosCampos("emailInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("emailValido");
    return true;
  }
}

function atualizarRequisitosSenha() {
  const senha = document.getElementById("senha").value;

  const requisitos = {
    "req-length": senha.length >= 6 && senha.length <= 10,
    "req-upper": /[A-Z]/.test(senha),
    "req-lower": /[a-z]/.test(senha),
    "req-number": /\d/.test(senha),
    "req-special": /[\W_]/.test(senha),
  };

  Object.entries(requisitos).forEach(([id, valido]) => {
    const item = document.getElementById(id);

    if (valido) {
      item.textContent = item.textContent.replace("❌", "✅");
      item.classList.add("valido");
      item.classList.remove("invalido");
    } else {
      item.textContent = item.textContent.replace("✅", "❌");
      item.classList.add("invalido");
      item.classList.remove("valido");
    }
  });
}

function senhaValidate() {
  atualizarRequisitosSenha();

  const index = 3;
  const valor = campos[index].value;

  if (valor.length > 0 && !pwRegex.test(valor) && !issame()) {
    setError(index);
    validaTodosCampos("senhaInvalida");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("senhaValida");
    return true;
  }
}

function issame() {
  const index = 3;
  const confirm = 4;
  const valor = campos[index].value;
  const valor2 = campos[confirm].value;

  if (valor == valor2) {
    removeError(confirm);
    validaTodosCampos("confSenhaValida");
    return true;
  } else {
    setError(confirm);
    validaTodosCampos("confSenhaInvalida");
    return false;
  }
}

function cadastrar() {
  const name = document.getElementById("name").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const dados = {
    name: name,
    senha: "[protegido]",
    email: email,
    telefone: telefone,
  };
  setTimeout(() => {
    alert("Conta cadastrada com sucesso!");
  }, 1500);
  document.querySelector(".saida").textContent = JSON.stringify(dados, null, 2);
}

function validaTodosCampos(campo) {
  if (campo == "nomeValido") {
    nomeValidado = true;
  }
  if (campo == "telefoneValido") {
    telefoneValidado = true;
  }
  if (campo == "emailValido") {
    emailValidado = true;
  }
  if (campo == "senhaValida") {
    senhaValidado = true;
  }
  if (campo == "confSenhaValida") {
    confSenhaValidado = true;
  }
  if (campo == "nomeInvalido") {
    nomeValidado = false;
  }
  if (campo == "telefoneInvalido") {
    telefoneValidado = false;
  }
  if (campo == "emailInvalido") {
    emailValidado = false;
  }
  if (campo == "senhaInvalida") {
    senhaValidado = false;
  }
  if (campo == "confSenhaInvalida") {
    confSenhaValidado = false;
  }
  if (
    nomeValidado &&
    telefoneValidado &&
    emailValidado &&
    senhaValidado &&
    confSenhaValidado
  ) {
    button.classList.remove("disabled");
    button.disabled = false;
  } else {
    button.classList.add("disabled");
    button.disabled = true;
  }
}
