var img = document.querySelector('img');
var userFullName = document.querySelector('.user-fullname');
var userName = document.querySelector('.user-username');
var email = document.querySelector('#user-email');
var userLogaction = document.querySelector('#user-location');
var btn = document.querySelector(".btn");
var url = "https://randomuser.me/api/";

btn.addEventListener("click", function() {
    fetch(url).then(function(res) {
        if (!res.ok) {
            throw Error(res.status);
        }
        return res;
    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        img.src = data.results[0].picture.large;
        userFullName.textContent = data.results[0].name.last + " " + data.results[0].name.first;
        userName.textContent = data.results[0].login.username;
        email.textContent = data.results[0].email;
        userLogaction.textContent = data.results[0].location.city;
    }).catch(function(error) {
        console.log(error);
    });
});