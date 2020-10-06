var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

counter.innerHTML = 1001;
let count = 500;
setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
    
}, 0.1);

setTimeout(() => {
    followers.innerText = "Followers in Instagram"    
}, 2000);