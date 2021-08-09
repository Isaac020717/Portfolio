const projectListDiv = document.querySelector(".project_list");

async function getRepos() {
    const url = "https://api.github.com/users/Isaac020717/repos";
    const response = await fetch(url);
    const result = await response.json();

    result.forEach(i=>{
        const anchor = document.createElement("a");
        anchor.href = "";
        anchor.textContent = i.full_name;
        projectListDiv.appendChild(anchor);
        projectListDiv.appendChild(document.createElement("br"));
    });


}

getRepos();
