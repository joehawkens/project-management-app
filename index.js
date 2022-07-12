// REGISTRATION FORM DATA ( POST )

const registrationForm = document.querySelector('#register-form');

function handleSubmit(event) {

    event.preventDefault();

    // turns data into JSON...

    const data = new FormData(event.target);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    const parsed = JSON.parse(json)

    // POSTS JSON into local Database...

    axios.post("http://localhost:3000/users", {

        username: parsed.username,
        password: parsed.password

      })

      .then((response) => {
        console.log(response);
        window.alert("You have succesfully registered.")
      });
    }

registrationForm.addEventListener('submit', handleSubmit);
  