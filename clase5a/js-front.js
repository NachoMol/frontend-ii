let escribirHTML = (titulo, texto) => {
    const body = document.getElementById('body');
    const miTemplate = `\
    <h1>${titulo}</h1>
    <p>${texto}</p>
    
    `;

    body.innerHTML += miTemplate;
}

escribirHTML('hola','esto es el body')