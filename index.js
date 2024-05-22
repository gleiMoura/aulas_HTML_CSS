function criarCrianca() {
    const inputValue = document.getElementById("input").value;
    const childBigBox = document.getElementById("child_011");

    /* childBigBox.innerHTML = ''; */ //Anula o que tem dentro do elemento dom

    for (let i = 0; i < 3; i++) {
        let numeroDoId = 2 + i;
        let id = 'child_02' + numeroDoId;

        childBigBox.innerHTML += `
        <div class="child_box" id="child_02${numeroDoId}">
            <p>${inputValue}</p>
            <button onclick="desaparecer('${id}')">Desapareça!</button>
        </div>
        `;
    };

    /*  let constante = 10;
        constante = constante + 1;
        constante++; */
    //i++ --> soma um

    //sem template string
    /* const nome = "eu tenho" + anos + "anos"
    <p>nome</p> */
};

function desaparecer(id) {
    const elemento = document.getElementById(id);
    elemento.style.display = 'none';
}

