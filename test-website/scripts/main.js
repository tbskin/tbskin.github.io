var myImage = document.querySelector('img');

myImage.onclick = function(){

 var mvar = myImage.getAttribute('src');

 if(mvar === 'images/websiteimage.png'){
  myImage.setAttribute('src','images/websiteimage2.jpeg');
 }
 
 else{
  myImage.setAttribute('src','images/websiteimage.png');
 }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
 var myName = prompt('Enter your name');
 localStorage.setItem('name',myName);
 myHeading.textContent = "Hey there "+ myName;
}

if(!localStorage.getItem('name')){
 setUserName();
}
else{
 var storedName = localStorage.getItem('name');
 myHeading.textContent = "Weird Image "+storedName;
}

myButton.onclick = function(){
 setUserName();
}
