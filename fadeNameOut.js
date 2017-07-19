console.log("Hello, World!");
var userName;
//Testing hiding the post name box
function hideNameBox(){
$("#name_box").hide();
$('#welcomeMessage').hide();
$('#redirectMessage').hide();
}
//Fades in the welcome message
function fadeWelcomeIn(){
  $('#welcomeMessage').fadeIn(4000);
  $('#welcomeMessage').fadeOut(500);
}
function fadeInRedirect(){

$('#redirectMessage').fadeIn(4000);
$('#redirectMessage').fadeIn(500);
setTimeout(window.location.replace("file:///Users/demouser/osorioandy7/blog.html"),16000)

}
//Fades new text box into screen
function fadeNameIn(){
$('#name_box').fadeIn(4000);
$('#name_box').fadeOut(500);


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
setTimeout(fadeNameIn,2000);
setTimeout(fadeWelcomeIn,6500);
setTimeout(fadeInRedirect,11000);
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
