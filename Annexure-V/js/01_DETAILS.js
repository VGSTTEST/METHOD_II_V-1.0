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
//var userId = firebase.auth().currentUser.uid;

//return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //var  Title                            = (snapshot.val() && snapshot.val().Title) || 'NULL';
//var  Name_College                     = (snapshot.val() && snapshot.val().Name_College) || 'NULL';
//var  Address_of_the_College           = (snapshot.val() && snapshot.val().Address_of_the_College) || 'NULL';
  //var  CollegeInstituteEmailId          = (snapshot.val() && snapshot.val().CollegeInstituteEmailId) || 'NULL';
  //var  Website                          = (snapshot.val() && snapshot.val().Website) || 'NULL';
  //var  Institute_Land_lineNumber        = (snapshot.val() && snapshot.val().Institute_Land_lineNumber) || 'NULL';
  //var  Name_of_the_Principal_Programme_Coordinator = (snapshot.val() && snapshot.val().Name_of_the_Principal_Programme_Coordinator) || 'NULL';
  //var  Principal_Qualification          = (snapshot.val() && snapshot.val().Principal_Qualification) || 'NULL';
  //var  Principal_Gender                 = (snapshot.val() && snapshot.val().Principal_Gender) || 'NULL';
  //var  Principal_Designation            = (snapshot.val() && snapshot.val().Principal_Designation) || 'NULL';
  //var  Principal_Department             = (snapshot.val() && snapshot.val().Principal_Department) || 'NULL';
  //var  Principal_Email_ID               = (snapshot.val() && snapshot.val().Principal_Email_ID) || 'NULL';
  //var  Principal_Cell_Number            = (snapshot.val() && snapshot.val().Principal_Cell_Number) || 'NULL';
  //var  Principal_Residential_Address    = (snapshot.val() && snapshot.val().Principal_Residential_Address) || 'NULL';
  //var  Co_Principal_Name                = (snapshot.val() && snapshot.val().Co_Principal_Name) || 'NULL';
  //var  Co_Principal_Qualification       = (snapshot.val() && snapshot.val().Co_Principal_Qualification) || 'NULL';
  //var  Co_Principal_Gender              = (snapshot.val() && snapshot.val().Co_Principal_Gender) || 'NULL';
  //var  Co_Principal_Designation         = (snapshot.val() && snapshot.val().Co_Principal_Designation) || 'NULL';
  //var  Co_Principal_Department          = (snapshot.val() && snapshot.val().Co_Principal_Department) || 'NULL';
  //var  Co_Principal_Years_of_Teaching   = (snapshot.val() && snapshot.val().Co_Principal_Years_of_Teaching) || 'NULL';
  //var  Co_Principal_Email_ID            = (snapshot.val() && snapshot.val().Co_Principal_Email_ID) || 'NULL';
  //var  Co_Principal_Cell_Number         = (snapshot.val() && snapshot.val().Co_Principal_Cell_Number) || 'NULL';
  //var  Co_Principal_Residential_Address = (snapshot.val() && snapshot.val().Co_Principal_Residential_Address) || 'NULL';
 // var  Designation_of_the_Head_of_the_Institution = (snapshot.val() && snapshot.val().Designation_of_the_Head_of_the_Institution) || 'NULL';
  //var  DD_to_be_written_in_favour_of    = (snapshot.val() && snapshot.val().DD_to_be_written_in_favour_of) || 'NULL';
  //var  Name_of_the_Account_holder       = (snapshot.val() && snapshot.val().Name_of_the_Account_holder) || 'NULL';
  //var  Name_of_the_Bank                 = (snapshot.val() && snapshot.val().Name_of_the_Bank) || 'NULL';
  //var  The_Branch_Address               = (snapshot.val() && snapshot.val().The_Branch_Address) || 'NULL';
  //var  IFS_code                         = (snapshot.val() && snapshot.val().IFS_code) || 'NULL';
  //var  SB_Ac_Number                     = (snapshot.val() && snapshot.val().SB_Ac_Number) || 'NULL';
//});


// Reference messages collection
var messagesRef = firebase.database().ref('FDP/proposals/'+userId1);   



// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

//Submit form
function submitForm(e)
{
  e.preventDefault(); 


// Get values

var V1  = getInputval('Title');
var V2  = getInputval('NameCollege');
var V3  = getInputval('AddressoftheCollege');
var V4  = getInputval('College/InstituteEmailId');
var V5  = getInputval('Website');
var V6  = getInputval('InstituteLandlineNumber');
var V7  = getInputval('NameofthePrincipalProgrammeCoordinator');
var V8  = getInputval('PrincipalQualification');
var V9  = getInputval('male');
var V9  = getInputval('female');
var V10 = getInputval('PrincipalDesignation');
var V11 = getInputval('PrincipalDepartment');
var V12 = getInputval('PrincipalEmailID');
var V13 = getInputval('PrincipalCellNumber');
var V14 = getInputval('PrincipalResidentialAddress');
var V15 = getInputval('Co_PrincipalName');
var V16 = getInputval('Co_PrincipalQualification');
var V17 = getInputval('Co_PrincipalM');
var V17 = getInputval('Co_PrincipalF');
var V18 = getInputval('Co_PrincipalDesignation');
var V19 = getInputval('Co_PrincipalDepartment');
var V20 = getInputval('Co_PrincipalYearsofTeaching');
var V21 = getInputval('Co_PrincipalEmailID');
var V22 = getInputval('Co_PrincipalCellNumber');
var V23 = getInputval('Co_PrincipalResidentialAddress');
var V24 = getInputval('DesignationoftheHeadoftheInstitution');
var V25 = getInputval('DDtobewritteninfavourof');
var V26 = getInputval('NameoftheAccountholder');
var V27 = getInputval('NameoftheBank');
var V28 = getInputval('TheBranchAddress');
var V29 = getInputval('IFScode');
var V30 = getInputval('SBA/cNumber')


  //Save Principal Investigator
  savePrincipalInvestigator(V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,V11,V12,V13,V14,V15,V16,V17,V18,V19,V20,V21,V22,V23,V24,V25,V26,V27,V28,V29,V30)     // Show alert
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
function savePrincipalInvestigator(V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,V11,V12,V13,V14,V15,V16,V17,V18,V19,V20,V21,V22,V23,V24,V25,V26,V27,V28,V29,V30)
{
  var newPrincipalInvestigator = messagesRef.push();
  newPrincipalInvestigator.set(
      {
        Title : V1,
        Name_College : V2,
        Address_of_the_College : V3,
        CollegeInstituteEmailId : V4,
        Website : V5,
        Institute_Land_lineNumber : V6,
        Name_of_the_Principal_Programme_Coordinator : V7,
        Principal_Qualification : V8,
        Principal_Gender : V9,
        Principal_Designation : V10,
        Principal_Department : V11,
        Principal_Email_ID : V12,
        Principal_Cell_Number : V13,
        Principal_Residential_Address : V14,
        Co_Principal_Name : V15,
        Co_Principal_Qualification : V16,
        Co_Principal_Gender : V17,
        Co_Principal_Designation : V18,
        Co_Principal_Department : V19,
        Co_Principal_Years_of_Teaching : V20,
        Co_Principal_Email_ID : V21,
        Co_Principal_Cell_Number : V22,
        Co_Principal_Residential_Address : V23,
        Designation_of_the_Head_of_the_Institution : V24,
        DD_to_be_written_in_favour_of : V25,
        Name_of_the_Account_holder : V26,
        Name_of_the_Bank : V27,
        The_Branch_Address : V28,
        IFS_code : V29,
        SB_Ac_Number : V30,

      }
  );
}