var sideA; //side A as a string

var sideB; //side B as a string

var sideC; //side C as a string


function checkTriangle(){
    var sideA = document.getElementById('sideA').value;
    sideA = parseInt(sideA);
        if(isNaN(sideA)){
        document.getElementById('sideAerror').innerHTML  = "Please enter valid numbers";
        return;
    }



    document.getElementById('checkresults').innerHTML  = result;
    
    
}