if (localStorage.getItem("token")== null) {
    alert("Você precisa estar logado para acessar esa página");
    window.location.href = "../html/aasets/pages/index.html";
}