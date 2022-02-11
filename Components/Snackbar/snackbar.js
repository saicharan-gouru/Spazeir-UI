const btnBaseline = document.querySelector(".btn-baseline");
const btnLeading = document.querySelector(".btn-leading");
const btnStacked = document.querySelector(".btn-stacked");
const baselineSnackbar = document.querySelector(".baseline-snackbar");
const leadingSnackbar = document.querySelector(".leading-snackbar");
const stackedSnackbar = document.querySelector(".stacked-snackbar");

function baselineHandler() {
    baselineSnackbar.className += " show";
    setTimeout(() => { baselineSnackbar.className = baselineSnackbar.className.replace(" show", ""); }, 1000);
}

function leadingHandler() {
    leadingSnackbar.className += " show";
    setTimeout(() => { leadingSnackbar.className = leadingSnackbar.className.replace(" show", ""); }, 1000);
}

function stackedHandler() {
    stackedSnackbar.className += " show";
    setTimeout(() => { stackedSnackbar.className = stackedSnackbar.className.replace(" show", ""); }, 1000);
}


btnBaseline.addEventListener("click", baselineHandler);
btnLeading.addEventListener("click", leadingHandler);
btnStacked.addEventListener("click", stackedHandler);