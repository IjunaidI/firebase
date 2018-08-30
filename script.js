

var database = firebase.database();
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, userName, placeCity, placeCountry;


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var uid = firebase.auth().currentUser.uid;
    document.querySelector(".invis").style.display = 'block';
    document.querySelector(".invis").innerHTML = user.uid;
    var ref = firebase.database().ref(`users/${uid}`);
    var uid = firebase.auth().currentUser.uid;

    
  }

  else {
    document.querySelector(".invis").style.display = 'none';
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
  let userCity = document.querySelector("#city").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(rs => {
      console.log(rs.user.uid);
      firebase.database().ref().child('accounts').child(rs.user.uid).set({
        city: userCity
      })
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage)

    });
  document.querySelector(".info").style.display = 'flex';
  document.querySelector(".log").style.display = 'none';
}
//   function info(){

// }

function logOut() {
  firebase.auth().signOut().then(function () {
    alert("signed out")
  }).catch(function (error) {
    window.alert(error)
  });
}
