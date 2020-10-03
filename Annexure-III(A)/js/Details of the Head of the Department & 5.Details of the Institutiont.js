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
      var  HODName                                                            = (snapshot.val() && snapshot.val().HODName) || 'NULL';
      var  HODEmail_ID                                                        = (snapshot.val() && snapshot.val().HODEmail_ID) || 'NULL';
      var  HODCell_Number                                                     = (snapshot.val() && snapshot.val().HODCell_Number) || 'NULL';
      var  Name_of_the_College_Institution_with_address                       = (snapshot.val() && snapshot.val().Name_of_the_College_Institution_with_address) || 'NULL';
      var  Type_of_the_Institution                                            = (snapshot.val() && snapshot.val().Type_of_the_Institution) || 'NULL';
      var  Accredited_year_by_NAAC_NBA                                        = (snapshot.val() && snapshot.val().Accredited_year_by_NAAC_NBA) || 'NULL';
      var  Name_of_the_Head_of_the_Institution_for_the_project_implementation = (snapshot.val() && snapshot.val().Name_of_the_Head_of_the_Institution_for_the_project_implementation) || 'NULL';
      var  Designation_of_the_Head_of_the_Institution                         = (snapshot.val() && snapshot.val().Designation_of_the_Head_of_the_Institution) || 'NULL';
      var  PhoneNumber_OR_collegewebsite                                      = (snapshot.val() && snapshot.val().PhoneNumber_OR_collegewebsite) || 'NULL';
      var  Institutiont_Cell_Number                                           = (snapshot.val() && snapshot.val().Institutiont_Cell_Number) || 'NULL';
      var  Institutiont_EmailID                                               = (snapshot.val() && snapshot.val().Institutiont_EmailID) || 'NULL';
  });
*/
// Reference messages collection
var messagesRef = firebase.database().ref('proposals/'+userId1); 

// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

//Submit form
function submitForm(e)
{
    e.preventDefault(); 

// Get values
    var V1 = getInputval('HODName');
    var V2 = getInputval('HODEmail_ID');
    var V3 = getInputval('HODCell_Number');
    var V4 = getInputval('NameoftheCollege/Institutionwithaddress');
    var V5 = getInputval('TypeoftheInstitution');
    var V6 = getInputval('AccreditedyearbyNAAC');
    var V7 = getInputval('NameoftheHeadoftheInstitutionfortheprojectimplementation');
    var V8 = getInputval('DesignationoftheHeadoftheInstitution');
    var V9 = getInputval('PhoneNumber(Landline)andcollegewebsite');
    var V10 = getInputval('InstitutiontCellNUmber');
    var V11 = getInputval('InstitutiontEmailID')
    //Save Co_Principal Investigator

    saveCo_PrincipalInvestigator(V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,V11)

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
function saveCo_PrincipalInvestigator(V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,V11)
{
    var newCo_PrincipalInvestigator = messagesRef.push();
    newCo_PrincipalInvestigator.set(
        {
            HODName: V1,
            HODEmail_ID: V2,
            HODCell_Number: V3,
            Name_of_the_College_Institution_with_address: V4,
            Type_of_the_Institution: V5,
            Accredited_year_by_NAAC_NBA: V6,
            Name_of_the_Head_of_the_Institution_for_the_project_implementation: V7,
            Designation_of_the_Head_of_the_Institution:V8,
            PhoneNumber_OR_collegewebsite: V9,
            Institutiont_Cell_Number: V10,
            Institutiont_EmailID: V11,

        }
    );
}
