var studentsArray = [];

function init() {
    if (localStorage.studentsRecord) {
        studentsArray = JSON.parse(localStorage.studentsRecord);
        for (var i = 0; i < studentsArray.length; i++) {
            prepareTableCell(i,studentsArray[i].firstname, studentsArray[i].lastname, studentsArray[i].rollnum, studentsArray[i].subject);
        }
    }
}

function onRegisterPressed() {

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var rollNum = document.getElementById("rollnum").value;
    var subject = document.getElementById("subject").value;

    var stuObj = { firstname: firstName, lastname: lastName, rollnum: rollNum, subject: subject };
    studentsArray.push(stuObj);

    localStorage.studentsRecord = JSON.stringify(studentsArray);
    prepareTableCell(firstName, lastName, rollNum, subject);



    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("rollnum").value = "";
}
// function onRegisterPressed(){

//   var firstName=document.getElementById("firstname").value;
//   var lastName=document.getElementById("lastname").value;
//   var rollNum=document.getElementById("rollnum").value;
//  var subject=document.getElementById("subject").value;

//  var table=document.getElementById("regtable");
//  var row=table.insertRow();
//   var firstNameCell=row.insertCell(0);
//   var lastNameCell=row.insertCell(1);
//  var rollNumCell=row.insertCell(2);
//  var subjectCell=row.insertCell(3);

//  firstNameCell.innerHTML=firstName;
//  lastNameCell.innerHTML=lastName;
//   rollNumCell.innerHTML=rollNum;
//   subjectCell.innerHTML=subject;

//clear fields

//  document.getElementById("firstname").value="";
//   document.getElementById("lastname").value="";
//  document.getElementById("rollnum").value="";
//  }

function prepareTableCell(index, firstName, lastName, rollNum, subject) {
    var table = document.getElementById("regtable");
    var row = table.insertRow();

    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var rollNumCell = row.insertCell(2);
    var subjectCell = row.insertCell(3);
    var actionCell = row.insertCell(4);
    
    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    rollNumCell.innerHTML = rollNum;
    subjectCell.innerHTML = subject;
    actionCell.innerHTML = '<button>Edit</button><br/><button onclick="deleteTableRow(' + index+')">Delete</button>';
}

function deleteTableRow(index) {
    var table = document.getElementById("regtable");
    table.deleteRow(index+1);
}