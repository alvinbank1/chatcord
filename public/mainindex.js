function myFunction() {
    let elem = document.querySelectorAll(".dropdown");

    elem.forEach(element=>{
        element.addEventListener("click", e =>{
            document.getElementById("test").value = e.target.innerHTML;
        });
    })
}

myFunction();
