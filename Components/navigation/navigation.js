const child = document.querySelectorAll(".child");

function Handler(eve) {
    for (let i = 0; i < child.length; i++)
        child[i].className = child[i].className.replace(" active", "");
    eve.currentTarget.className += " active";
}