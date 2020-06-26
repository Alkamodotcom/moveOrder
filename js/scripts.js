var bob = [];

function listAdd() {
    var boxvalue = document.getElementById("Inputbox").value;
    var boxvalue2 = document.getElementById("Inputbox2").value;
    var boxvalue3 = document.getElementById("Inputbox3").value;
    var boxvalue4 = document.getElementById("Inputbox4").value;
    bob.push(boxvalue);
    bob.push(boxvalue2);
    bob.push(boxvalue3);
    bob.push(boxvalue4);
    shuffleArray(bob);
    console.log(bob);

    alert("the order is" + bob);

    return false;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}