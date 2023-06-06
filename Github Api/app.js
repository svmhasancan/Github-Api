const form = document.getElementById("github-form");
const lastUsers_btn = document.getElementById("clear-last-users");


const github = new Github();
const ui = new UI();

eventListeners();
function eventListeners(){
    form.addEventListener("submit",getUser);
    lastUsers_btn.addEventListener("click",clearLastUsers);
}


function getUser(e){
    const githubName = document.getElementById("githubname").value;
    github.username = githubName;
    ui.userName = githubName;
    github.getUser()
    .then(response => {
        const user = response;

        if(user.message === "Not Found"){
            ui.displayMessages();
            ui.clearInput();
        }
        else{
            ui.data = user;
            ui.clearInput();
            ui.addFromUI();
            Storage.addSearchedUsersToStorage(githubName);
            ui.addSearchedUsersToUI(githubName);
            

            
            github.getRepos()
            .then(repos => {
                ui.addReposFromUI(repos);
            })
            .catch(err => console.log(err));
        }
        
        
    })
    .catch(err => console.log(err));

    e.preventDefault();
}

function clearLastUsers(){
    ui.clearLastUsers();
    Storage.clearAllSearchedUsersFromStorage();
}