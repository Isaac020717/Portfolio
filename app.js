const projectListDiv = document.querySelector(".project_list");

async function getRepos() {
    const url = "https://api.github.com/users/Isaac020717/repos";
    const response = await fetch(url);
    const result = await response.json();

    result.forEach(i=>{

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project_div");
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("project_title_div");
        const title = document.createElement("h1");
        title.textContent = i.name;
        titleDiv.appendChild(title);
        projectDiv.appendChild(titleDiv);

        const descriptionDiv = document.createElement("div");
        titleDiv.classList.add("project_desc_div");
        const description = document.createElement("p");
        description.textContent = i.description;
        titleDiv.appendChild(description);

        projectListDiv.appendChild(projectDiv);

        projectDiv.addEventListener("click", () => window.location=i.html_url);

    });


}

getRepos();
