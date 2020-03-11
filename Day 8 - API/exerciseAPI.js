fetch("https://api.tronalddump.io/random/quote")
 .then(function(response) {
     return response.json();
 })
 .then(function(data){
     console.log(data.value)
     document.write(data.value)
 });
 console.log("hello world")
 document.write("hello world")

