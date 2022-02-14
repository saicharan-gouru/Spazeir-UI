const btnDialog = document.querySelector(".btn-dialog");
const dialog = document.querySelector(".dialog");
const close = document.querySelector(".far");




btnDialog.addEventListener("click", () => {
    dialog.style.display = "block";

})

close.addEventListener("click", () => {
    dialog.style.display = "none";
})