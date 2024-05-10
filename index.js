function darNome() {
    const inputValue = document.getElementById("input").value;
    const childBigBox = document.getElementById("child_011");

    //template string
    childBigBox.innerHTML = `
        <div class="child_box" id="child_021">
            <p>${inputValue}</p>
        </div>
    `;
    
    //sem template string
    /* const nome = "eu tenho" + anos + "anos"
    <p>nome</p> */

    console.log(inputValue)
};