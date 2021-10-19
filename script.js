var count = [1,1,1];
var likeCounter0 = document.querySelector('#likes0');
var likeCounter1 = document.querySelector('#likes1');
var likeCounter2 = document.querySelector('#likes2');


function add1(index, x) {
    count[index]++;
    (x).innerHTML = count[index] + " likes";
    console.log(count)
}