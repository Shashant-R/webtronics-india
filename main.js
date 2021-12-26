window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
    console.log(e.target.className);
    var cs = e.target.className;
    var x = document.getElementById("menu");
    if(cs === "menu")return;
    if(cs === "open-menu" && x.style.display === "none")
    {
        x.style.display = "block";
    }
    else if(x.style.display === "block")
    {
        x.style.display = "none";
    }
} 