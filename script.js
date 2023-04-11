$("#selectPiece").on('change', function () {
    let piece = $("#selectPiece").find(":selected").val();
    getPieces(piece);
});
let produtos = document.querySelectorAll(".piece");
function getPieces(piece) { 
    $("#pieces").empty();
    $("#pieces").append(
        `<div class="piece" name="${piece}" draggable="true" ondragstart="dragstart(this)" ondrag="drag(this)" ondragend="dragend(this)">
        <img src="images/1.png" alt="">
        <h2>${piece}</h2>
        </div>
        <div class="piece" name="${piece}" draggable="true" ondragstart="dragstart(this)" ondrag="drag(this)" ondragend="dragend(this)">
        <img src="images/1.png" alt="">
        <h2>${piece}</h2>
        </div>`
        
    );
    produtos = document.querySelectorAll(".piece");
}

function dragstart(element){
    let typeElement = element.getAttribute("name");
    element.classList.add("is-dragging")
    dropzone = document.querySelector(`#${typeElement}`);    
    dropzone.classList.add("highlight");
}
function dragend(element){
    console.log("drag card end")
    element.classList.remove("is-dragging")   
    dropzone.classList.remove("highlight");
}
function drag(){
    console.log("dragging")
}
dropzones = document.querySelectorAll('.dropzone');
dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragover", dragover)
    dropzone.addEventListener("drop", drop)
    dropzone.addEventListener("dragenter", dragenter)
    dropzone.addEventListener("dragleave", dragleave)
});

function dragleave() {
    
}
function drop() {
    
}
function dragenter() {

}
function dragover() {
    let pieceBeingDrag = document.querySelector('.is-dragging')
    if(pieceBeingDrag.getAttribute("name") == this.id){
        this.appendChild(pieceBeingDrag);
        $(dropzone).empty();
    }
}
function remover(button) {
    let buttonCard = $(button).parent();
    let dropzone = $(buttonCard).find(".dropzone");

}