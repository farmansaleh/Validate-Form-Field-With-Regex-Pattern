/* Note :: You have to add validateRegex function with onkeypress event in field which validate value 
with regex pattern and add class 
after that add condition for that class in validateRegex function and pass parameter 

 author : @Farman Saleh
 date   : August 27/2022
 github : github.com/farmansaleh

**/

function validateRegex(element) {
    //get All class from input field
    let classNames = element.className;
    
    //first check that in current field, validate regex class available or not
    if(classNames.includes("validate-email")) {
        //pass current input object, Regex Pattern and message which you want to display
        validateValueWithRegex(element,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Enter valid email');
    }else if(classNames.includes("validate-mo-number")) {
        validateValueWithRegex(element,/^[6-9]{1}[0-9]{9}$/,'Enter valid mobile number and start with 6');
    }else if(classNames.includes("validate-password")) {
        validateValueWithRegex(element,/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/,'Min 8 characters which contain at least one numeric digit and a special character');
    }
}
//test value with regex pattern
function validateValueWithRegex(element,regexPattern,message) {
    var formID = $("#"+element.id).closest('form').attr("id");

    if(element.value != null && element.value != "" && element.value != undefined){
        //if value is not matched with regex pattern then it will return true otherwise return false
        if(!regexPattern.test(element.value)) {
            //if input in-valid then it will show display invalid message otherwise remove message
            $("#"+formID).find("#"+element.id).addClass("in-valid");
            displayInvalidInputMessage(formID, element.id, message);
            return false;
        }
        else {
            //if input in-valid then it will show display invalid message otherwise remove message
            $("#"+formID).find("#"+element.id).removeClass("in-valid");
            $("#"+formID).find("#"+element.id).next("span").remove();
            return true;
        }
    }else{
        $("#"+formID).find("#"+element.id).removeClass("in-valid");
        $("#"+formID).find("#"+element.id).next("span").remove();
        return true;
    }
}

function displayInvalidInputMessage(formID, inputId, message) {
    $("#"+formID).find("#"+inputId).addClass("in-valid");
    if($("#"+formID).find("#"+inputId).hasClass("in-valid")) {
        //if invalid then create span otherwise remove span
        $("#"+formID).find("#"+inputId).next("span").remove();
        $("#"+formID).find("#"+inputId).after( $("<span/>").addClass("text-danger").attr("style","font-size:12px;").text(message) );
    }
    else {
        $("#"+formID).find("#"+inputId).next("span").remove();
    }
}