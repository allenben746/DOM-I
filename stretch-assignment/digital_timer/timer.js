
msTens = document.getElementById('msTens');

msHundreds = document.getElementById('msHundreds');

secondOnes = document.getElementById('secondOnes');

secondTens = document.getElementById('secondTens');







let timer = function(toggle){
    if (toggle === 'true'){
        console.log("Timer on.");

    }
    else{
        console.log("Timer off.");
    }
}

timer('false');