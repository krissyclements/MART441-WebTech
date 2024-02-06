function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Yay you made it outside and the weater is perfect! What activity first?";
        document.getElementById("choice1").innerHTML = "Read on the beach";
        document.getElementById("choice2").innerHTML = "Go in the water";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Okay hotel first, what do you need?";
        document.getElementById("choice1").innerHTML = "Watch a movie";
        document.getElementById("choice2").innerHTML = "Yummy snack";
    } else if (choice == 1 && answer1 == "Read on the beach") {
        document.getElementById("story").innerHTML = "Reading is a great choice, what book do you want to read?";
        document.getElementById("choice1").innerHTML = "Kitchen Confidential by Anthony Bourdain";
        document.getElementById("choice2").innerHTML = "Everybody Always by Bob Goff";
    } else if (choice == 2 && answer2 == "Go in the water") {
        document.getElementById("story").innerHTML = "What water activity first?";
        document.getElementById("choice1").innerHTML = "Paddleboarding";
        document.getElementById("choice2").innerHTML = "Snorkeling";
    } else if (choice == 1 && answer1 == "Watch a movie") {
        document.getElementById("story").innerHTML = "What movie do you want to watch?";
        document.getElementById("choice1").innerHTML = "The Great Gatsby";
        document.getElementById("choice2").innerHTML = "The Notebook";
    } else if (choice == 2 && answer2 == "Yummy snack") {
        document.getElementById("story").innerHTML = "What do you want to eat?";
        document.getElementById("choice1").innerHTML = "Smoothie bowl";
        document.getElementById("choice2").innerHTML = "Avocado toast";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Kitchen Confidential by Anthony Bourdain") {
        document.getElementById("story").innerHTML = "Enjoy your book!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Everybody Always by Bob Goff") {
        document.getElementById("story").innerHTML = "Enjoy your book!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Paddleboarding") {
        document.getElementById("story").innerHTML = "Have fun paddleboarding!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Snorkeling") {
        document.getElementById("story").innerHTML = "Have fun snorkelling!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "The Great Gatsby") {
        document.getElementById("story").innerHTML = "Enjoy The Great Gatsby!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "The Notebook") {
        document.getElementById("story").innerHTML = "Enjoy The Notebook!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Smoothie bowl") {
        document.getElementById("story").innerHTML = "Enjoy your smoothie bowl!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Avocado toast") {
        document.getElementById("story").innerHTML = "Enjoy your avocado toast!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "You just landed in the Bahamas, are you ready to find your first adventure?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Have a great day!";

    }


}
