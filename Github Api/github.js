class Github{
    constructor(username){
        this.username = username;
        this.url = `https://api.github.com/users/`;
        this.repos_url = "https://api.github.com/users/";
    }

    getUser(){
        return new  Promise((resolve,reject) => {
            fetch(this.url + this.username)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    getRepos(){
        return new Promise((resolve,reject) => {
            fetch(this.repos_url + this.username + "/repos")
            .then(response => response.json())
            .then(repos => resolve(repos))
            .catch(err => reject(err));
        })
    }
}