console.log("Hello, World!");
var userName;
//Testing hiding the post name box
function hideNameBox(){
$("#name_box").hide();
}
//Fades new text box into screen
function fadeNameIn(){
$('#name_box').fadeIn(25000);
}
//Fades screen
function fadeScreen(){
$('#nameTextBox').fadeOut(2000);
$('button').fadeOut(2000);
$('#namePrompt').fadeOut(2000);
}
// On button press initiates fading
function listenerButton(){
$('button').on('click',fadeScreen);
}
//Writes input from box into string
function rightUserNameInVar(){
userName = $("textarea").val();
$('#name_box').append(userName);
fadeNameIn();
return userName;
}
//Prepares button for pressing//
function setup(){
$('#submitButton').click(rightUserNameInVar);

}


//////////////////////////////////////////////////////////////
$(document).ready(hideNameBox);
$(document).ready(listenerButton);
$(document).ready(setup);
/////////////////////////////////////////////////////////////
