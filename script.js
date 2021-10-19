var count = [1,1,1];
var likeCounter = document.querySelector("#likes");

console.log(likeCounter)

function add1(index) {
    count[index]++;
    likeCounter.innerHTML = count[index] + " likes";
    console.log(count)
}