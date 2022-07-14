
// When the user clicks the logout button they're redirected to the homepage and their token is cleared...

function logout() {


    localStorage.removeItem("token");
    window.location.href = "/index.html";

}


document.querySelector("#logout").addEventListener("click", logout)




// Add Project Button - when pressed, will dynamically generate a form
// to fill with project info (title, description, etc.)



const addProjectButton = document.querySelector("#add-project-button")



function showProjects() {
    
    const projectsDiv = document.querySelector('#projects');
    projectsDiv.innerHTML = 
    `
    <label for="Project Title">Project Title</label>
    <input type="text" id="project-title" name="project-title" form="add-project">
    <label for="project-description">Project Description</label>
    <textarea name="project-description" resize="none" id="project-description" form="add-project" cols="30" rows="10"></textarea>
    <form id="add-project">
        <input type="submit" value="Create Project">
    </form>
    
    `
    document.querySelector("#add-project-button").style.display = "none";
    
}








addProjectButton.addEventListener("click", showProjects)
