// REGISTRATION FORM DATA 

const registrationForm = document.querySelector('#register-form');

function handleSubmit(event) {

    event.preventDefault();

    // turns data into JSON...

    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');
    console.log({ username, password });

    // POSTS JSON into local Database...

    


  }
  

registrationForm.addEventListener('submit', handleSubmit);
  