// * These variables refer to the code except the contact page form
const btnDarkModeToggle = document.getElementById('botaoTema');
const themeSystem = localStorage.getItem('themeSystem') || 'light';

const menuTheme = document.getElementById('menu');
const menuSystem = localStorage.getItem('menuSystem') || 'green';

const paragraph = document.getElementsByClassName('textoBranco');
const paragraphTags = localStorage.getItem('paragraphTags') || 'dark';

const containerProgrammersPhoto = document.getElementById(
  'containerFotoProgramadores'
);
const containerPhoto = localStorage.getItem('containerPhoto') || 'light';

const containerPageWorks = document.getElementsByClassName('containerServicos');
const containerWorks = localStorage.getItem('containerWorks') || 'light';

const containerPageOurContacts =
  document.getElementById('containerNossosContatos') || 'dark';
const containerOurContacts = localStorage.getItem('containerOurContacts');

const containerDefault = document.getElementById('containerPrincipal');
const containerDefaultPageIndex =
  localStorage.getItem('containerDefaultPageIndex') || 'light';

// * These variables refer to the form
const botaoEnviarMensagem = document.getElementsByClassName(
  'botaoEnviarMensagem'
);

const mensagemConfirmacao = document.getElementById('mensagemConfirmacao');

btnDarkModeToggle.addEventListener('click', () => {
  let oldTheme = localStorage.getItem('themeSystem') || 'light';
  let newTheme = oldTheme === 'light' ? 'dark' : 'light';

  let oldMenuTheme = localStorage.getItem('menuSystem') || 'green';
  let newMenuTheme = oldMenuTheme === 'green' ? 'dark' : 'green';

  let oldTagP = localStorage.getItem('paragraphTags') || 'dark';
  let newTagP = oldTagP === 'dark' ? 'light' : 'dark';

  let oldContainerPhoto = localStorage.getItem('containerPhoto') || 'light';
  let newContainerPhoto = oldContainerPhoto === 'light' ? 'dark' : 'light';

  let oldContainerWorks = localStorage.getItem('containerWorks') || 'light';
  let newContainerWorks = oldContainerWorks === 'light' ? 'dark' : 'light';

  let oldContainerOurContacts =
    localStorage.getItem('containerOurContacts') || 'light';
  let newContainerOurContacts =
    oldContainerOurContacts === 'light' ? 'dark' : 'light';

  let oldContDefaultPageIndex =
    localStorage.getItem('containerDefaultPageIndex') || 'light';
  let newContDefaultPageIndex =
    oldContDefaultPageIndex === 'light' ? 'dark' : 'light';

  localStorage.setItem('themeSystem', newTheme);
  localStorage.setItem('menuSystem', newMenuTheme);
  localStorage.setItem('paragraphTags', newTagP);
  localStorage.setItem('containerPhoto', newContainerPhoto);
  localStorage.setItem('containerWorks', newContainerWorks);
  localStorage.setItem('containerOurContacts', newContainerOurContacts);
  localStorage.setItem('containerDefaultPageIndex', newContDefaultPageIndex);

  defineCurrentTheme(
    newTheme,
    newMenuTheme,
    newTagP,
    newContainerPhoto,
    newContainerWorks,
    newContainerOurContacts,
    newContDefaultPageIndex
  );
});

function defineCurrentTheme(
  theme,
  menu,
  tagP,
  containerPhoto,
  containerWorks,
  containerOurContacts,
  containerDefaultPageIndex
) {
  const darkSvg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'><path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'/><path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'/></svg>";
  const lightSvg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-sun' viewBox='0 0 16 16'><path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'/></svg>";
  document.documentElement.setAttribute('data-theme', theme);

  if (theme === 'light') {
    btnDarkModeToggle.innerHTML = darkSvg;
  } else {
    btnDarkModeToggle.innerHTML = lightSvg;
  }

  if (menu === 'green') {
    menuTheme.style.backgroundColor = '#5f8471';
  } else {
    menuTheme.style.backgroundColor = '#222222';
  }

  Array.from(paragraph).forEach((paragraph) => {
    paragraph.style.color = tagP === 'dark' ? '#222222' : '#fffafa';
  });

  containerProgrammersPhoto.style.backgroundColor =
    containerPhoto === 'dark' ? '#202629' : '#fffafa';

  Array.from(containerPageWorks).forEach((containerWork) => {
    containerWork.style.backgroundColor =
      containerWorks === 'light' ? '#202629' : '#fffafa';
  });

  containerPageOurContacts.style.backgroundColor =
    containerOurContacts === 'light' ? '#202629' : '#fffafa';

  containerDefault.style.backgroundColor =
    containerDefaultPageIndex === 'light' ? '#fffafa' : '#202629';
}

defineCurrentTheme(
  themeSystem,
  menuSystem,
  paragraphTags,
  containerPhoto,
  containerPageWorks,
  containerOurContacts,
  containerDefaultPageIndex
);

function openPageContact() {
  window.open(
    'https://henriquejunqueira.github.io/codigo_agil/contato.html',
    '_self'
  );
}

function verificaCaracteresProibidosNome(nome) {
  const caracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/g;
  return caracteresEspeciais.test(nome);
}

function verificaCaracteresProibidosEmail(string) {
  const caracteresEspeciaisemail = /[!#$%^&*(),?":{}|<>]/g;
  return caracteresEspeciaisemail.test(string);
}

function verificaCaracteresProibidosTextarea(textarea) {
  const caracteresEspeciaisemail = /[/'";@#$%^&*()?"{}|<>]/g;
  return caracteresEspeciaisemail.test(textarea);
}

function sendMessage() {
  const inputName = document.getElementById('nome').value;
  const inputEmail = document.getElementById('email').value;
  const textareaMensagem = document.getElementById('mensagem').value;

  // * Checks if form fields are empty
  let nomeVazio = inputName !== '';
  let emailVazio = inputEmail !== '';
  let msgVazia = textareaMensagem !== '';

  if (nomeVazio || emailVazio || msgVazia) {
    event.preventDefault();
    mensagemConfirmacao.style.color = '#fffafa';
    mensagemConfirmacao.style.backgroundColor = '#5565d9';
    mensagemConfirmacao.innerHTML = `Mensagem enviada com sucesso! Agradeçemos por entrar em contato conosco ${inputName}`;
  }

  if (!nomeVazio || !emailVazio || !msgVazia) {
    event.preventDefault();
    mensagemConfirmacao.style.color = '#fffafa';
    mensagemConfirmacao.style.backgroundColor = '#DC2B56';
    mensagemConfirmacao.innerHTML = `Por favor, preencha todos os campos!`;
  }

  // * Checks if form fields have special characters
  let nomeCharInvalido = verificaCaracteresProibidosNome(inputName);
  let emailCharInvalido = verificaCaracteresProibidosEmail(inputEmail);
  let msgCharInvalido = verificaCaracteresProibidosTextarea(textareaMensagem);

  if (nomeCharInvalido) {
    event.preventDefault();
    mensagemConfirmacao.style.color = '#fffafa';
    mensagemConfirmacao.style.backgroundColor = '#DC2B56';
    mensagemConfirmacao.innerHTML = `Por favor, utilize caracteres válidos no nome!`;
  }

  if (emailCharInvalido) {
    event.preventDefault();
    mensagemConfirmacao.style.color = '#fffafa';
    mensagemConfirmacao.style.backgroundColor = '#DC2B56';
    mensagemConfirmacao.innerHTML = `Por favor, utilize caracteres válidos no email!`;
    return false;
  }

  if (msgCharInvalido) {
    event.preventDefault();
    mensagemConfirmacao.style.color = '#fffafa';
    mensagemConfirmacao.style.backgroundColor = '#DC2B56';
    mensagemConfirmacao.innerHTML = `Por favor, utilize caracteres válidos na mensagem!`;
    return false;
  }

  setTimeout(() => {
    mensagemConfirmacao.innerHTML = '';
  }, 5000);

  return false;
}
