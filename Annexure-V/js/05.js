// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGO2B6hQTK4K5OE5zrbJ02vjdi6f28Erk",
    authDomain: "vgstproposals.firebaseapp.com",
    databaseURL: "https://vgstproposals.firebaseio.com",
    projectId: "vgstproposals",
    storageBucket: "vgstproposals.appspot.com",
    messagingSenderId: "552421108644",
    appId: "1:552421108644:web:6e33c08cbc16366cdeef31",
    measurementId: "G-0QNPLQVH6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var userId1 ;

//var user = firebase.auth().currentUser;

const auth = firebase.auth();
firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
        user.providerData.forEach(function (profile) {
            emailVerified = user.emailVerified;
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Name: " + profile.displayName);
         userId1 = profile.uid;
         console.log("  uid: " + userId1);
          console.log("Email: " + profile.email + "\nvarified status: " + user.emailVerified);
          console.log("  Photo URL: " + profile.photoURL);

        });
      }
      else {
      // User is signed out.
      // ...
    }
  })
console.log(userId1);
  // Reference messages collection
  var messagesRef = firebase.database().ref('FDP/proposals/'+userId1);   
  
  // Listen for form submit
  document.getElementById('Budget').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('value01');
  var N02 = getInputval('value02');
  var N03 = getInputval('value03');
  var N04 = getInputval('value04');
  var N05 = getInputval('value05');
  var N06 = getInputval('value06');
  var N07 = getInputval('value07');
  var N08 = getInputval('value08');
  var N09 = getInputval('value09');
  var N10 = getInputval('value10');
  var N11 = getInputval('value11');
  var N12 = getInputval('value12');
  var N13 = getInputval('value13');
  var N14 = getInputval('value14');
  var N15 = getInputval('value15');
  var N16 = getInputval('value16');
  var N17 = getInputval('value17');
  var N18 = getInputval('value18');
  var N19 = getInputval('value19');
  var N20 = getInputval('value20');
  var N21 = getInputval('value21');
  var N22 = getInputval('value22');
  var N23 = getInputval('value23');

  
  
  
    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('Budget').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        value01:N01,
        value02:N02,
        value03:N03,
        value04:N04,
        value05:N05,
        value06:N06,
        value07:N07,
        value08:N08,
        value09:N09,
        value10:N10,
        value11:N11,
        value12:N12,
        value13:N13,
        value14:N14,
        value15:N15,
        value16:N16,
        value17:N17,
        value18:N18,
        value19:N19,
        value20:N20,
        value21:N21,
        value22:N22,
        value23:N23,
        }
    );
  }