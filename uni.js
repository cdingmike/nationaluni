
var access = [
    { username: 'winlwinoo', password: "lwin007@" },
    { username: 'myo', password: "thazon008" }
];

function getInto() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for (var i = 0; i < access.length; i++) {
        if (username === access[i].username && password === access[i].password) {
            location.href = "uni_2page.html";
            return;
        }
    }
    
    alert('Invalid username or password');
}



