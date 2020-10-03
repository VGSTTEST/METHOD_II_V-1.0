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
/*
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) { 
    var Co_PrincipalInvestigatorName                                = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorName) || 'NULL';
    var Co_PrincipalInvestigatorDOB                                 = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorDOB) || 'NULL';
    var Co_PrincipalInvestigatorGender                              = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorGender) || 'NULL';
    var Co_PrincipalInvestigatorQualification                       = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorQualification) || 'NULL';
    var Co_PrincipalInvestigatordesignation                         = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatordesignation) || 'NULL';
    var Co_PrincipalInvestigatorDepartment                          = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorDepartment) || 'NULL';
    var Co_PrincipalInvestigatorYearsofteachingorResearchExperience = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorYearsofteachingorResearchExperience) || 'NULL';
    var Co_PrincipalInvestigatorEmailId                             = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorEmailId) || 'NULL';
    var Co_PrincipalInvestigatorCellNum                             = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorCellNum) || 'NULL';
    var Co_PrincipalInvestigatorResidentialAddress                  = (snapshot.val() && snapshot.val().Co_PrincipalInvestigatorResidentialAddress) || 'NULL';
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
    var Co_PriName = getInputval('Co_PrincipalInvestigatorName');
    var Co_PriGender = getInputval('Co_PrincipalInvestigatorGender');
    var Co_PriDOB = getInputval('Co_PrincipalInvestigatorDOB');
    var Co_PriQual = getInputval('Co_PrincipalInvestigatorQualification');
    var Co_PriDesg = getInputval('Co_PrincipalInvestigatorDesignation');
    var Co_PriDept = getInputval('Co_PrincipalInvestigatorDepartment');
    var Co_PriExp = getInputval('Co_PrincipalInvestigatorExperience');
    var Co_PriEmail = getInputval('Co_PrincipalInvestigatorEmail');
    var Co_PriPhone = getInputval('Co_PrincipalInvestigatorPhoneNo');
    var Co_PriAdd = getInputval('Co_PrincipalInvestigatorResidentialAddress')
    //Save Co_Principal Investigator

    saveCo_PrincipalInvestigator(Co_PriName,Co_PriGender,Co_PriDOB,Co_PriQual,Co_PriDesg,Co_PriDept,Co_PriExp,Co_PriEmail,Co_PriPhone,Co_PriAdd)

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

// Save Co_Principal Investigator
function saveCo_PrincipalInvestigator(Co_PriName,Co_PriGender,Co_PriDOB,Co_PriQual,Co_PriDesg,Co_PriDept,Co_PriExp,Co_PriEmail,Co_PriPhone,Co_PriAdd)
{
    var newCo_PrincipalInvestigator = messagesRef.push();
    newCo_PrincipalInvestigator.set(
        {
          Co_PrincipalInvestigatorName: Co_PriName,
          Co_PrincipalInvestigatorDOB: Co_PriDOB,
          Co_PrincipalInvestigatorGender: Co_PriGender,
          Co_PrincipalInvestigatorQualification: Co_PriQual,
          Co_PrincipalInvestigatordesignation: Co_PriDesg,
          Co_PrincipalInvestigatorDepartment: Co_PriDept,
          Co_PrincipalInvestigatorYearsofteachingorResearchExperience: Co_PriExp,
          Co_PrincipalInvestigatorEmailId:Co_PriEmail,
          Co_PrincipalInvestigatorCellNum: Co_PriPhone,
          Co_PrincipalInvestigatorResidentialAddress: Co_PriAdd,

        }
    );
}
