class UI {
    constructor(userName, data) {
        this.userName = userName;
        this.data = data;
        this.lastUsers = document.getElementById("last-users");
    }


    addFromUI() {
        document.getElementById("profile").innerHTML =
            `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${this.data.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${this.data.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${this.userName}</strong></div>
                         <hr>
                         <div id="bio">${this.data.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${this.data.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${this.data.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${this.data.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${this.data.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${this.data.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email">${this.data.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>

        `;


    }

    clearInput() {
        document.getElementById("githubname").value = "";
    }

    displayMessages() {


        // <div class="alert alert-warning alert-dismissible fade show" id = "alert" role="alert">
        //     <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>
        const alert_div = document.createElement("div");
        alert_div.className = "alert alert-warning alert-dismissible fade show";
        alert_div.id = "alert";
        alert_div.role = "alert";
        alert_div.innerHTML = 
        `
            <strong>Kullanıcı Bulunamadı!</strong> Lütfen geçerli bir kullanıcı adı giriniz.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
            </button>
        `;




        document.getElementById("search").appendChild(alert_div);
    }

    addReposFromUI(repoData) {
        const repos = document.getElementById("repos");
        repos.innerHTML = "";
        repoData.forEach(function (repository) {

            repos.innerHTML +=
                `
            <div class="mb-2 card-body">
                <div class="row">
                    <div class="col-md-2">
                        <span></span>
                        <a href="${repository.html_url}" target="_blank" id="repoName">${repository.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-secondary">
                            Starlar <span class="badge badge-light" id="repoStar">${repository.stargazers_count}</span> 
                        </button>

                        <button class="btn btn-info">
                            Forklar <span class="badge badge-light" id="repoFork">${repository.forks_count}</span>
                        </button>

                    </div>
                </div>

            </div>
            `;
        });

    }

    addSearchedUsersToUI(username) {
        /* <li class="list-group-item">dnaskndlsandas</li> */

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = username;

        this.lastUsers.appendChild(li);
    }

    clearLastUsers(){
        const deleteSearched = this.lastUsers.querySelectorAll("li"); // <li class="list-group-item">username</li>
        deleteSearched.forEach(function(delete_li){
            delete_li.remove();
        })
    }





}


