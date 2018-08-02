
firebase.auth().onAuthStateChanged(function(user) {
   

    if (user) {
      document.querySelector(".invis").innerHTML = user.email;
    } else {
        document.querySelector(".invis").style.display = 'block';
    }
  });

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

