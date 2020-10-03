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
  /*
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var  BroadAreas                 = (snapshot.val() && snapshot.val().BroadAreas) || 'NULL';
    var  FocusedArea                = (snapshot.val() && snapshot.val().FocusedArea) || 'NULL';
    var  BroadNoofPublicationsAreas = (snapshot.val() && snapshot.val().NoofPublications) || 'NULL';
    var  extrapub                   = (snapshot.val() && snapshot.val().extrapub) || 'NULL';
  });
*/
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
  var messagesRef = firebase.database().ref('proposals/'+userId1); 
  
  
  // Listen for form submit
  document.getElementById('annIIIc').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('ProjectProposalTitle');
  var N02 = getInputval('ProjectProposalKeywords');
  var N03 = getInputval('ProjectProposalObjectives');
  var N04 = getInputval('ProjectProposalBackground');  
  var N05 = getInputval('ProjectProposalMethodology');  
  var N06 = getInputval('Milestones01');  
  var N07 = getInputval('ProjectProposalEquipmentAvailable');  
  var N08 = getInputval('ProjectProposalEquipmentRequired');  
  var N09 = getInputval('ProjectProposalRelevance');  
  var N10 = getInputval('ProjectProposalNovelty');  
  var N11 = getInputval('ProjectProposalLeads');  
  var N12 = getInputval('ProjectProposalInnovationsPatents');  
  var N13 = getInputval('ProjectProposalStartUp');  
  var N14 = getInputval('ProjectProposalCost');  
  var N15 = getInputval('ProjectProposalCostEffective');  
  var N16 = getInputval('ProjectProposalAdditional');  
  var N17 = getInputval('ProjectProposalDeliverables');  
  var N18 = getInputval('ProjectProposalCollaboration');  
  var N19 = getInputval('ProjectProposalCollaboratinResearch');  
  var N20 = getInputval('ProjectProposalCollaboratin01');  
  var N21 = getInputval('Blank01');  
  var N22 = getInputval('file01');  
  var N23 = getInputval('file02');  
  var N24 = getInputval('file03');  
  var N25 = getInputval('file04');  
  var N26 = getInputval('textarea01');  
  var N27 = getInputval('textarea02');  
  var N28 = getInputval('textarea03');  
  var N29 = getInputval('textarea04');  
  var N30 = getInputval('textarea05');  
  var N31 = getInputval('textarea06');

    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23,N24,N25,N26,N27,N28,N29,N30,N31)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('annIIIc').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23,N24,N25,N26,N27,N28,N29,N30,N31)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
          ProjectProposalTitle: N01, 
          ProjectProposalKeywords: N02,
          ProjectProposalObjectives: N03,
          ProjectProposalBackground: N04,
          ProjectProposalMethodology: N05,
          Milestones01: N06,
          ProjectProposalEquipmentAvailable: N07,
          ProjectProposalEquipmentRequired: N08,
          ProjectProposalRelevance: N09,
          ProjectProposalNovelty: N10,
          ProjectProposalLeads: N11,
          ProjectProposalInnovationsPatents: N12,
          ProjectProposalStartUp: N13,
          ProjectProposalCost: N14,
          ProjectProposalCostEffective: N15,
          ProjectProposalAdditional: N16,
          ProjectProposalDeliverables: N17,
          ProjectProposalCollaboration: N18,
          ProjectProposalCollaboratinResearch: N19,
          ProjectProposalCollaboratin01: N20,
          Blank01: N21,
          file01: N22,
          file02: N23,
          file03: N24,
          file04: N25,
          textarea01: N26,
          textarea02: N27,
          textarea03: N28,
          textarea04: N29,
          textarea05: N30,
          textarea06: N31,
        }
    );
  }