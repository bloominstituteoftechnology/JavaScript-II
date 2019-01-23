console.log('PLAYING WITH IIFE👇');

let namePlaying = (function () { 
    let name = "Maxime Salomon"; 
    return name + "is playing with IIFE!";
})(); 

console.log(namePlaying);