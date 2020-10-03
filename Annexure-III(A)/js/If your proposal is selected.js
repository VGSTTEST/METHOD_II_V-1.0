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

 var user = firebase.auth().currentUser;

var userId1
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
/*
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var  Cheque_DD_to_be_written_in_favour_of = (snapshot.val() && snapshot.val().Cheque_DD_to_be_written_in_favour_of) || 'NULL';
    var  Name_of_the_Account_holder           = (snapshot.val() && snapshot.val().Name_of_the_Account_holder) || 'NULL';
    var  Name_of_the_Bank_and_Branch          = (snapshot.val() && snapshot.val().Name_of_the_Bank_and_Branch) || 'NULL';
    var  IFS_Code                             = (snapshot.val() && snapshot.val().SB_Ac_Number) || 'NULL';
    var  SB_Ac_Number                         = (snapshot.val() && snapshot.val().SB_Ac_Number) || 'NULL';
    var  Address_of_the_Bank                  = (snapshot.val() && snapshot.val().Address_of_the_Bank) || 'NULL';
  });*/

  
 // Reference messages collection
var messagesRef = firebase.database().ref('proposals/'+userId1); 


// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

//Submit form
function submitForm(e)
{
    e.preventDefault(); 


// Get values

    var V1 = getInputval('Cheque/DD to be written in favour of');
    var V2 = getInputval('Name of the Account holder');
    var V3 = getInputval('Name of the Bank and Branch');
    var V4 = getInputval('IFS Code');
    var V5 = getInputval('SB A/c Number');
    var V6 = getInputval('Address of the Bank')
    //Save Principal Investigator
    savePrincipalInvestigator(V1,V2,V3,V4,V5,V6)

      // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
 // },3000);

  // Clear form
  document.getElementById('Proposals').reset();
}

// Function to get from values
function getInputval(id)
{
    return document.getElementById(id).value;
}

// Save Principal Investigator
function savePrincipalInvestigator(V1,V2,V3,V4,V5,V6)
{
    var newPrincipalInvestigator = messagesRef.push("asdasda");
    newPrincipalInvestigator.set(
        {
          Cheque_DD_to_be_written_in_favour_of: V1,
          Name_of_the_Account_holder: V2,
          Name_of_the_Bank_and_Branch: V3,
          IFS_Code: V4,
          SB_Ac_Number: V5,
          Address_of_the_Bank: V6,
   
        }
    );
}
