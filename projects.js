
// When the user clicks the logout button they're redirected to the homepage and their token is cleared...

function logout() {


    localStorage.removeItem("token");
    window.location.href = "/index.html";

}


document.querySelector("#logout").addEventListener("click", logout)


//