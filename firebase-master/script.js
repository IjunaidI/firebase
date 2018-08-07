
var database = firebase.database();
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified,userName,placeCity,placeCountry;
function varAsign(){

var userName = document.querySelector("#username").value;
var placeCity = document.querySelector("#city").value;
var  placeCountry = document.querySelector("#country").value;
}

firebase.auth().onAuthStateChanged(function(user) {
   
    varAsign();
    if (user) {
      document.querySelector(".invis").style.display = 'block';
      document.querySelector(".invis").innerHTML = user.uid;
      if (user != null) {
        name = userName;
        photoUrl = "user.photoURL";
        emailVerified = "none";
        uid = user.uid;
        city = placeCity;
        country = placeCountry;  
      }
      if (user != null) {
        writeUserData(uid, name, email, photoUrl,city,country);
      }

      var ref = firebase.database().ref(`users/${uid}`);

      ref.on("value", function(snapshot) {
         console.log(snapshot.val());
      }, function (error) {
         console.log("Error: " + error.code);
      });
    }
    
     else {
        document.querySelector(".invis").style.display = 'none';
    }
  });
  function writeUserData(userId, name, email, imageUrl,city,country) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl,
      place1  : city,
      place2 : country
    });
  }
function signIn(){ 
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       window.alert(errorMessage);
      });
}

function signUp(){ 
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       window.alert(errorMessage);


      });

}

function logOut(){
firebase.auth().signOut().then(function() {
    alert("signed out")
  }).catch(function(error) {
    window.alert(error)
  });
}
