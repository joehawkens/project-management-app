
// When the user clicks the logout button they're redirected to the homepage and their token is cleared...

function logout() {


    localStorage.removeItem("token");
    window.location.href = "/index.html";

}

document.querySelector("#logout").addEventListener("click", logout)



// Create Project Form ====================================================================================================

const addProjectButton = document.querySelector("#add-project");

function generateProjectForm(){

    document.querySelector("#add-project").innerHTML = 
    `
    <form id="add-project">
        <label for="project-title">Project Title</label>
        <input id="project-title" type="text" name="project-title">
        <label for="project-desc">Project Description</label>
        <textarea id="project-desc"  name="project-desc" resize="none" cols="30" rows="10"></textarea>
        <input type="submit" value="Create Project">
    </form>
    `

    document.querySelector("#add-project-button").style.display = 'none';
    document.querySelector("#my-projects-button").style.display = 'none';
}

document.querySelector("#add-project-button").addEventListener("click", generateProjectForm)



// (POSTS Project Form to Database) =====================================================================================

const createProjectForm = document.querySelector('#add-project');

function createProject(event) {

    event.preventDefault(event);

    // turns data into JSON...

    const data = new FormData(event.target);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    const parsed = JSON.parse(json)

    const projectTitle = parsed["project-title"];
    const projectDesc = parsed["project-desc"];

    // POSTS JSON into JSON server...

    axios.post("http://localhost:3000/projects", {

        title: projectTitle,
        description: projectDesc,
        userID: sessionStorage.getItem("currentUser")

      })

      .then((response) => {
        console.log(response.data);
        window.alert("Your Project has been posted!")

      })

      .catch(function (error) {
        console.log(error.toJSON());
        window.alert("invalid credentials, try again.")
      });
      

}

createProjectForm.addEventListener('submit', createProject);



// (GET Project from Database) =====================================================================================

// When button clicked, fetch data...
//


const myProjectsButton = document.querySelector('#my-projects-button');

function getProjects(){

    // POSTS JSON into JSON server...

    axios.get('http://localhost:3000/projects')
    .then(function (response) {
        console.log(response.data);
    })
      .catch(function (error) {
        console.log(error.toJSON());
        window.alert("You don't have any projects.")
      });
      






}

myProjectsButton.addEventListener('click', getProjects);
