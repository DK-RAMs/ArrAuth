var authArr = [];

var matimbaForm = document.getElementById("MatimbaForm");

var validateForm = function() {
    var formComplete = true;
    for(var i = 0; i < matimbaForm.elements.length; i++){
        if(matimbaForm.elements[i].type != "submit"){
            if(matimbaForm.elements[i].value.trim() == ""){
                formComplete = false;
                matimbaForm.elements[i].style.borderColor = "#c26c40";
                document.getElementById("warningMessage" + i).style.display = "block";
            }
            else{
                matimbaForm.elements[i].style.borderColor = "#ced4da";
                document.getElementById("warningMessage" + i).style.display = "none";
            }
            if(matimbaForm.elements[i].name == "Age"){
                if(matimbaForm.elements[i].value < 1){
                    formComplete = false;
                    matimbaForm.elements[i].style.borderColor = "#c26c40";
                    document.getElementById("warningMessage" + i).style.display = "block";
                }    
            }
        }
    }
    return formComplete;
}


var confirm = function(){
    var formComplete = validateForm();
    if(formComplete){
        if(matimbaForm.elements[4].value === matimbaForm.elements[5].value){
            matimbaForm.elements[5].style.borderColor = "#ced4da";
            document.getElementById("warningMessage5").style.display = "none";
            authArr = [matimbaForm.elements[0].value, matimbaForm.elements[1].value,   matimbaForm.elements[2].value, matimbaForm.elements[3].value, matimbaForm.elements[4].value, matimbaForm.elements[5].value];
            alert("Thanks for sending in your details! We will email you shortly");
            matimbaForm.reset();
        }
        else{
            alert("Passwords do not match. Please make sure that you confirmed your password properly");
            matimbaForm.elements[5].style.borderColor = "#c26c40";
            document.getElementById("warningMessage5").style.display = "block";
        }
    }
}


document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    confirm();
})