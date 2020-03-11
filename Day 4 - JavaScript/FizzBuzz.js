let input = prompt("Enter a number between 1 - 100 :")
let result = ""


    if (input>100){
    alert("Please enter another amount")
    }     
    else if (input%15==0)
    {
        alert("FizzBuzz")
    }
    else if (input%5==0){
        alert("Buzz")
    }  
    else if (input%3==0){
        alert("Fizz")
    }  
    else if (isNaN(input)){
        alert("gobbledygook")
    } 
    else{
        alert(input)
    }




