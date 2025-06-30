function Password (){
    const password = parseFloat(document.getElementById("passnumber").value);

    if (password === 21434) {
        window.location.href = "../Happy_Anniversary/home.html";
    } else {
        alert("Wrong Password, try again")
    }
}
