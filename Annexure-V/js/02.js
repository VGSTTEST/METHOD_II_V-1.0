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
  document.getElementById('DETAILS').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('TitleoftheProgramme');
  var N02 = getInputval('Keywords');
  var N03 = getInputval('ObjectivesoftheProgramme');
  var N04 = getInputval('RelevanceoftheProgrammeTopic');
  var N05 = getInputval('BackgroundoftheProgrammewithrespectto');
  var N06 = getInputval('SimilarEventsorganisedbytheInstitute');
  var N07 = getInputval('PleaseprovidelistofResourcepersonswithdetails');
  var N08 = getInputval('ProposeddatesfortheProgramme');
  var N09 = getInputval('AdditionalDetailsoftheProgramme');
  
  
  
    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('DETAILS').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
          TitleoftheProgramme : N01,
          Keywords : N02,
          ObjectivesoftheProgramme : N03,
          RelevanceoftheProgrammeTopic : N04,
          BackgroundoftheProgrammewithrespectto : N05,
          ISimilarEventsorganisedbytheInstitute : N06,
          PleaseprovidelistofResourcepersonswithdetails : N07,
          ProposeddatesfortheProgramme : N08,
          AdditionalDetailsoftheProgramme : N09,          
       
  
        }
    );
  }