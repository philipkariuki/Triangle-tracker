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

    var sideB = document.getElementById('sideB').value;
    sideB = parseInt(sideB);
    if(isNaN(sideB)){
        document.getElementById('sideBerror').innerHTML  = "Please enter valid numbers";
        return;
    }

    var sideC = document.getElementById('sideC').value;
    sideC = parseInt(sideC);
    if(isNaN(sideC)){
        document.getElementById('sideCerror').innerHTML  = "Please enter valid numbers";
        return;
    }

    // rejects values less than or equal to zero
    if (sideA <= 0 || sideB <= 0 || sideC <= 0)
    {
        result = "Invalid";
    }

    document.getElementById('checkresults').innerHTML  = result;
    
    
}