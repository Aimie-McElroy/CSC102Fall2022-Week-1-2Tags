function countdownTimer() {
    console.log("countdownTimer()started");
    var currTime = 50;
    document.getElementById("blastDis").innerHTML = currTime + " Seconds";

    //45 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 5000);


    //40 second display { 
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 10000);

    //35 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 15000);

    //30 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 20000);

    //25 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 25000);

    //20 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 30000);

    //15 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 35000);

    //10 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 40000);

    //05 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = currTime + " Seconds";
    }, 45000);

    //00 second display
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("blastDis").innerHTML = "Blastoff";
    }, 50000);
}

//btrCountdownTimer Used to fufill assignment Efficiency mission control
function brtCountdownTimer() {
    console.log("brtCountdownTimer() started");
    var currTime = 50;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            document.getElementById("blastDis").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("blastDis").innerHTML = "Blastoff!!!"
            }
            currTime = currTime - 5;
        }, i * 5000)

    }

}

function chgBtrCountdownTimer() {
    console.log("chgBtrCountdownTimer() started");
    var currTime = 50;
    var ogCurrTime = currTime;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            if (currTime == 0){
                //less than 1/2 left   
                document.getElementById("blastDis").innerHTML = "Blastoff!!!";
            } else if (currTime < 0.5 * ogCurrTime){
                //we finished counting down
                document.getElementById("blastDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " seconds";
            } else {
                //at the beginning
                document.getElementById("blastDis").innerHTML = currTime + "Seconds";
            }
            currTime = currTime - 5;
        }, i * 5000)//Success

    }
}
//begining of PlayCraps set up
function playcraps() {
    //troubleshooting playCraps() has started
    console.log("playcraps() started");
    //variable die 1-2 complete
    var die1 = 0;
    var die2 = 0;
    //troubleshooting for log completed
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    //console.log completed
    console.log(die1)
    console.log(die2)
    //Results on screen action
    document.getElementById("die1Res").innerHTML = "The result for die1 is:" + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is:" + die2;
    //Success 

    //check if craps (7 or 11)
    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("You Lose!!!!!!!!");
        document.getElementById("gameRes").innerHTML = "You Did not find Victory. Wanna try again?";

        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("You Win!!!!!")
        document.getElementById("gameRes").innerHTML = "You Win!!!!!";

        //check for tie
    } else {
        console.log("You did not Win or Lose.")
        document.getElementById("gameRes").innerHTML = "You did not Win or Lose. Wanna try again?";
    }
}
