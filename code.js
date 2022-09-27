function countdownTimer(){
console.log("countdownTimer()started");
var currTime = 50;
document.getElementById("blastDis").innerHTML = currTime + " Seconds";

//45 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 5000);


//40 second display { 
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 10000);

//35 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 15000);

//30 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 20000);

//25 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 25000);

//20 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 30000);

//15 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 35000);

//10 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 40000);

//05 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
}, 45000);

//00 second display
setTimeout(function(){
    currTime = currTime - 5;
    document.getElementById("blastDis").innerHTML = "Blastoff";
}, 50000);}
