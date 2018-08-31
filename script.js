

var database = firebase.database();
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, userName, placeCity, placeCountry;


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var uid = firebase.auth().currentUser.uid;
    var refer = firebase.database().ref().child(`users/${uid}`);
    refer.on("value", function(snapshot) {
      document.querySelector("body").innerHTML = 
      `<div class="container">
          <div class="sub-container">
              <p class="hello">Hello</p>
              <p class="full-name name-style">${snapshot.val().firstName} ${snapshot.val().lastName}</p>
        <p class="name-style">Username:${snapshot.val().userName}<span class="name"></span></p>     
              <button class="logout-button" onclick="logOut()">Log Out</button>        
          </div>
      </div>`
    })
    

    
  }

  else {
   
  }
});

function signIn() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
  });
}

function signUp() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  let username = document.querySelector("#username").value;
  let first = document.querySelector("#first").value;
  let last = document.querySelector("#last").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(rs => {
      console.log(rs.user.uid);
      firebase.database().ref(`users/${rs.user.uid}`).set({
        userName: username,
        firstName: first,
        lastName: last

      })
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage)

    });
  
}
//   function info(){

// }

function logOut() {
  firebase.auth().signOut().then(function () {
    alert("signed out")
    window.location.href = "index.html"
  }).catch(function (error) {
    window.alert(error)
  });
}
function mySubmitFunction(){
  return false;
 }