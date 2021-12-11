const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
/*
function showContent() {
    element = document.getElementById("oculto");
    check = document.getElementById("compartir");
    if (compartir.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

function enviar_formulario(){
    document.contactanos.submit()
} */