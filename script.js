$("#selectPiece").on('change', function () {
    let piece = $("#selectPiece").find(":selected").val();
    getPieces(piece);
});
let produtos = document.querySelectorAll(".piece");
select = document.getElementById("selectPiece").options;

function getPieces(piece) { 
    $("#pieces").empty();
    $("#pieces").append(
        `<div class="piece" name="${piece}" draggable="true" ondragstart="dragstart(this)" ondrag="drag(this)" ondragend="dragend(this)">
        <img src="images/1.png" alt="">
        <h2>${piece}1</h2>
        </div>
        <div class="piece" name="${piece}" draggable="true" ondragstart="dragstart(this)" ondrag="drag(this)" ondragend="dragend(this)">
        <img src="images/1.png" alt="">
        <h2>${piece}2</h2>
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
    verificarComponentes()
}
function drag(){
    console.log("dragging")
}
listPieces = document.querySelector("#pieces")
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
        if(this.children){
            $("#pieces").append(this.firstElementChild);
            $(dropzone).empty();
        }
        this.appendChild(pieceBeingDrag);
    }
}
function remover(button) {
    let buttonCard = $(button).parent();
    let dropzone = $(buttonCard).find(".dropzone");
}
function verificarComponentes() {
    motherboard = document.querySelector("#motherboard");
    console.log(motherboard.firstElementChild)
    powerSupplies = document.querySelector("#power-supplies");
    console.log(powerSupplies.firstElementChild)
    if(motherboard.firstElementChild != null && powerSupplies.firstElementChild != null){
        console.log($("#selectPiece option"))
        let select = $("#selectPiece option")
        console.log(select.options);
        $("#selectPiece option").forEach(option => {
            $(option).removeAttr('disabled');
        });
    }
    
}