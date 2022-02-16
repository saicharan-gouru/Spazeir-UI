const child = document.querySelectorAll(".nav-child");

function Handler(eve) {
    for (let i = 0; i < child.length; i++)
        child[i].className = child[i].className.replace(" nav-active", "");
    eve.currentTarget.className += " nav-active";
}