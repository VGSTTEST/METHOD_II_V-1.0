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
  document.getElementById('ann401info').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('Name');
  var N02 = getInputval('date');
  var N03 = getInputval('male');
  var N04 = getInputval('female');
  var N05 = getInputval('Qualification');
  var N06 = getInputval('Designation');
  var N07 = getInputval('NameoftheDepartment');
  var N08 = getInputval('NameoftheInstitution');
  var N09 = getInputval('addressftheInstitution');
  var N10 = getInputval('TypeofInstitution');
  var N11 = getInputval('TeachingExperience');
  var N12 = getInputval('ResearchExperience');
  var N13 = getInputval('ResidentialAddress');
  var N14 = getInputval('eamil1');
  var N15 = getInputval('email2');
  var N16 = getInputval('cellno1');
  var N17 = getInputval('cellno2');
  var N18 = getInputval('lno1');
  var N19 = getInputval('lno2')
  
  
    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('ann401info').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
        Name: N01, 
        date: N02,
        male: N03,
        female: N04,
        Qualification: N05,
        Designation: N06,
        NameoftheDepartment: N07,
        NameoftheInstitution: N08,
        addressftheInstitution: N09, 
        TypeofInstitution: N10,
        TeachingExperience: N11,
        ResearchExperience: N12,
        ResidentialAddress: N13,
        email1: N14,
        email2: N15,
        cellno1: N16,
        cellno2: N17,
        lno1: N18,
        lno2: N19,
        }
    );
  }