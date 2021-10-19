var count = 1;
var likeCounter = document.querySelector("#likes");

console.log(likeCounter)

function add1() {
    count++;
    likeCounter.innerHTML = count + " likes";
    console.log(count)
}