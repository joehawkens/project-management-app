
// REGISTRATION FORM DATA ( POST )

const registrationForm = document.querySelector('#register-form');

function handleRegister(event) {

    event.preventDefault(event);

    // turns data into JSON...

    const data = new FormData(event.target);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    const parsed = JSON.parse(json)

    // POSTS JSON into local Database...

    axios.post("http://localhost:3000/register", {

        email: parsed.email,
        password: parsed.password

      })

      .then((response) => {
        window.location.href="login.html";
        console.log(response.data.accessToken);
        sessionStorage.setItem("token", response.data.accessToken) // Puts token into local storage to identify user.
      })

      .catch(function (error) {
        console.log(error.toJSON());
        document.querySelector("#alert").innerHTML = "invalid registration, try again."
      });
      
    }

registrationForm.addEventListener('submit', handleRegister);