function logout() {


    localStorage.removeItem("token");
    window.location.href = "/index.html";

}


document.querySelector("#logout").addEventListener("click", logout)