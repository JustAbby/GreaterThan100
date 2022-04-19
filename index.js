let countwer = 1;
let num = prompt("enter a number that is greater than 100", "example 129");

function display() {
    while(num < 100) {
        num = prompt("incorrect", "Input again", "example 160");
    }
    alert("you have inputed the right number");
}
display();