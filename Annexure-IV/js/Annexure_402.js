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

var user = firebase.auth().currentUser;


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
  var messagesRef = firebase.database().ref('ARP/proposals/'+userId1); 
  
  
  // Listen for form submit
  document.getElementById('ann402details').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('BroadAreas');
  var N02 = getInputval('FocusedArea');
  var N03 = getInputval('extrapub');
  var N04 = getInputval('patent'); 
  var N05 = getInputval("NoofPublications"); 
  var N06 = getInputval("Journal1");
  var N07 = getInputval("Journal02");
  var N08 = getInputval("GoogleImpact");
  var N09 = getInputval('Conference');
  var N10 = getInputval('Publications');
  var N11 = getInputval('Encloseacomplete');

    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('ann402details').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
          BroadAreas: N01, 
          FocusedArea: N02,
          extrapub: N03,
          patent: N04,
          NoofPublications: N05,
          Journal1: N06,
          Journal02:N07,
          GoogleImpact:N08,
          Conference:N09,
          Publications:N10,
          Encloseacomplete:N11,

        }
    );
  }