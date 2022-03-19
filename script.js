
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let print = document.getElementById("print");
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let number = [Math.floor(Math.random()*100)];
let no_of_guesses = 0;
let guessed_number = [];

btn.addEventListener('click', function(){
    let input =document.getElementById("userInput").value;
    if(input<1 || input>100){
        alert("Please entre a number between 1 and 100.");
    }
    else{
        guessed_number.push(input);
        no_of_guesses+=1;

        if(input<number){
            msg1.textContent="Your guess is too low";
            msg2.textContent ="No. of  guesses:" + no_of_guesses;
            msg3.textContent="Guessed number are:" + guessed_number
        }
        else if(input>number){
            msg1.textContent="Your guess is too high";
            msg2.textContent ="No. of  guesses:" + no_of_guesses;
            msg3.textContent="Guessed number are:" + guessed_number;
        }
        else if(input==number){
            msg1.textContent="Yippie You win";
            msg2.textContent ="The number was:" + number;
            msg3.textContent="You gussed it in: " + no_of_guesses+ " guesses";
            window.setTimeout(function(){
                window.location.reload();
            },2000);
        }
    }
    
})