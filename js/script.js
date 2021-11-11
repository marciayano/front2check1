
// selecionar o elemento do campo 1, 2 e 3
let field1 = document.querySelector('#field1');
let field2 = document.querySelector('#field2');
let field3 = document.querySelector('#field3');

// selecionar o checkbox
let checkbox = document.querySelectorAll('input[type=\'checkbox\']');

// selecionar o radio button
let radioButton = document.querySelectorAll('input[name=\'periodo\']')

// selecionar o elemento do botÃ£o
let btn = document.querySelector('#form'); // 

// atribuir um event listener
btn.addEventListener('submit',inserirComentario); // 

function radioChecked(inputs) {
  for(let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
          return inputs[i].value;
      }
  }    
}


// selecionar o valor digitado no campo 1 pela pessoa usuaria
  // criar um novo elemento li
  // inserir o valor digitado no interior da li
  // atribuir a li como filha da ol

function inserirComentario(event) {
  event.preventDefault();

  let radio = radioChecked(radioButton);
  //let check = checkChecked(checkbox);
  let wrapper = document.querySelector('#blocoComentario')

  let titulo = document.createElement('h3');
  titulo.innerHTML = field1.value;
  document.querySelector('div').appendChild(titulo);

  let descricao = document.createElement('p');
  descricao.innerHTML = field2.value;
  document.querySelector('div').appendChild(descricao);

  let img = document.createElement('img');
  img.setAttribute('src',field3.value);
  document.querySelector('div').appendChild(img);

  let selecao = document.createElement('span');
  selecao.innerHTML = radio;
  document.querySelector('div').appendChild(selecao);

  let conteudo = document.createElement('div') 

  conteudo.appendChild(titulo)
  conteudo.appendChild(descricao) 
  conteudo.appendChild(img) 
  conteudo.appendChild(selecao)  

  wrapper.appendChild(conteudo) 
}
