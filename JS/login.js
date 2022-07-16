// LOGIN FORM AUTHENTICATION - RETURNS A TOKEN IN SESSION STORAGE TO IDENTIFY USER.

const loginForm = document.querySelector('#login-form');

function handleLogin(event) {

    event.preventDefault();

    // turns data into JSON...

    const data = new FormData(event.target);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    const parsed = JSON.parse(json)

    // POSTS JSON into local Database...

    axios.post("http://localhost:3000/login", {

        email: parsed.email,
        password: parsed.password

      })

      .then((response) => {

        console.log(response.data.accessToken);
        sessionStorage.setItem("token", response.data.accessToken); // Puts token into local storage to identify user.
        window.location.href = "./projects.html";

      })

      .catch(function (error) {
        console.log(error.toJSON());
        document.querySelector("#alert").innerHTML = "invalid login, try again."
      });

    }

loginForm.addEventListener('submit', handleLogin);