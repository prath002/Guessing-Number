let btn = document.getElementById('btn');
let output = document.getElementById('outputtext')

let number = [Math.floor(Math.random()* 100)];

console.log(number);
btn.addEventListener('click',function(){
    let input =  document.getElementById('userInput').value;
    if(input == number)
    {
        output.innerHTML = `You guess right number, your number was ${number}`;
    }
    else if(input<number)
    {
        output.innerHTML = 'Your Guessed number is too low';
    };
    if(input>number)
    {
        output.innerHTML = 'You guessed to high...';
    }
    else if(input>100)
    {
        output.innerHTML = 'Enter number in between 0 to 100';
    }
})