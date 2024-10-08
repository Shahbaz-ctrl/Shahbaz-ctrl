var name = prompt("Enter your name");
var sub1 = parseInt(prompt("Enter subject 1 marks"));
var sub2 = parseInt(prompt("Enter subject 2 marks"));
var sub3 = parseInt(prompt("Enter subject 3 marks"));
var sub4 = parseInt(prompt("Enter subject 4 marks"));
var sub5 = parseInt(prompt("Enter subject 5 marks"));

alert("Your name is " + name);

var totalMarks = (  sub1  +  sub2  +  sub3  +  sub4  +  sub5);


alert("Your total marks is " + totalMarks);

function calculatePercentage(num){
    var percentage = (num / 500) * 100;
    return percentage;
}

var percentage = calculatePercentage(totalMarks);
alert("Your percentage is " +percentage);


if(percentage >= 90){
    alert("Your grade is A+")
}
 else if(percentage >= 80 && percentage <= 89){
    alert("Your grade is A")
}
else if(percentage >= 70 && percentage <= 79){
    alert("Your grade is B")
}
else if(percentage >= 60 && percentage <= 69){
    alert("Your grade is C")
}
else if(percentage >= 50 && percentage <= 59){
    alert("Your grade is D")
}
else if(percentage >= 40 && percentage <= 49){
    alert("Your grade is E")
}
else if(percentage >= 0 && percentage <= 39){
    alert("Your grade is Fail")
}


var mainDiv = document.getElementById("main")
console.log(mainDiv)

var h1 = document.createElement("h1");
h1.innerText = "Marksheet";
mainDiv.appendChild(h1);


var tableElm = document.createElement("table");
tableElm.setAttribute("border", "1")
for (let i = 0; i < 5; i++) {
    var tableRow1 = document.createElement("tr");
    var tbCol = document.createElement("td");
    var tbCol2 = document.createElement("td");
    tbCol.innerText = "col 1";
    tbCol2.innerText = "col 2";
    tableRow1.appendChild(tbCol)
    tableRow1.appendChild(tbCol2)
    tableElm.appendChild(tableRow1)
}

mainDiv.appendChild(tableElm);

// document.getElementById("main");
// Element.classList.add("main")

// document.getElementsByTagName(tableElm);
// Element.classList.add("tableElm")

document.getElementById("main").classList.add("main");

document.getElementsByTagName("table").classList.add("tableElm");
document.getElementById("main").appendChild(tableElm);

document.write()