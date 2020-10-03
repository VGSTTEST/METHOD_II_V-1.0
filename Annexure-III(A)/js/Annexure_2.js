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
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Aadhar/Annexure_5'); 
  
  
  // Listen for form submit
  document.getElementById('Annex2').addEventListener('submit', submitForm);
  
  //Submit form
  function submitForm(e)
  {
    e.preventDefault(); 
  
  
  // Get values
  
  var N01 = getInputval('Department1');
  var N02 = getInputval('Department2');
  var N03 = getInputval('college1');
  var N04 = getInputval('college2');
  var N05 = getInputval('ENGG');
  var N06 = getInputval('CHM');
  var N07 = getInputval('BAS');
  var N08 = getInputval('PHY');
  var N09 = getInputval('MLS');
  var N10 = getInputval('PCY');
  var N11 = getInputval('CMS');
  var N12 = getInputval('GEES');
  var N13 = getInputval('Null');
  var N14 = getInputval('Item1a');
  var N15 = getInputval('Item1b');
  var N16 = getInputval('Item1c');
  var N17 = getInputval('Item2a');
  var N18 = getInputval('Item2b');
  var N19 = getInputval('Item2c');
  var N20 = getInputval('Others1');
  var N21 = getInputval('Others2');
  var N22 = getInputval('Others3');
  var N23 = getInputval('Item1d');
  var N24 = getInputval('Item1e');
  var N25 = getInputval('Item1f');
  var N26 = getInputval('Item2d');
  var N27 = getInputval('Item2e');
  var N28 = getInputval('Item2f');
  var N29 = getInputval('Others4');
  var N30 = getInputval('Others5');
  var N31 = getInputval('Others6');
  var N32 = getInputval('Chemicals1');
  var N33 = getInputval('Chemicals2');
  var N34 = getInputval('Chemicals3');
  var N35 = getInputval('Glassware1');
  var N36 = getInputval('Glassware2');
  var N37 = getInputval('Glassware3');
  var N38 = getInputval('Others7');
  var N39 = getInputval('Others8');
  var N40 = getInputval('Others9');
  var N41 = getInputval('Chemicals4');
  var N42 = getInputval('Chemicals5');
  var N43 = getInputval('Chemicals6');
  var N44 = getInputval('Glassware4');
  var N45 = getInputval('Glassware5');
  var N46 = getInputval('Glassware6');
  var N47 = getInputval('Others10');
  var N48 = getInputval('Others11');
  var N49 = getInputval('Others12');
  
    //Save Principal Investigator
    savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23,N24,N25,N26,N27,N28,N29,N30,N31,N32,N33,N34,N35,N36,N37,N38,N39,N40,N41,N42,N43,N44,N45,N46,N47,N48,N49)     // Show alert
  //document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  // },3000);
  
  // Clear form
  document.getElementById('Annex2').reset();
  }
  
  // Function to get from values
  function getInputval(id)
  {
    return document.getElementById(id).value;
  }
  
  // Save Principal Investigator
  function savePrincipalInvestigator(N01,N02,N03,N04,N05,N06,N07,N08,N09,N10,N11,N12,N13,N14,N15,N16,N17,N18,N19,N20,N21,N22,N23,N24,N25,N26,N27,N28,N29,N30,N31,N32,N33,N34,N35,N36,N37,N38,N39,N40,N41,N42,N43,N44,N45,N46,N47,N48,N49)
  {
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        
        Department1: N01, 
        Department2: N02,
        college1: N03,
        college2: N04,
        ENGG: N05,
        CHM: N06,
        BAS: N07,
        PHY: N08,
        MLS: N09, 
        PCY: N10,
        CMS: N11,
        GEES: N12,
        Null: N13,
        Item1a: N14,
        Item1b: N15,
        Item1c: N16,
        Item2a: N17,
        Item2b: N18,
        Item2c: N19,
        Others1: N20,
        Others2: N21,
        Others3: N22,
        Item1d: N23,
        Item1e: N24,
        Item1f: N25,
        Item2d: N26,
        Item2e: N27,
        Item2f: N28,
        Others4: N29,
        Others5: N30,
        Others6: N31,
        Chemicals1: N32,
        Chemicals2: N33,
        Chemicals3: N34,
        Glassware1: N35,
        Glassware2: N36,
        Glassware3: N37,
        Others7: N38,
        Others8: N39,
        Others9: N40,
        Chemicals4: N41,
        Chemicals5: N42,
        Chemicals6: N43,
        Glassware4: N44,
        Glassware5: N45,
        Glassware6: N46,
        Others10: N47,
        Others11:N48,
        Others12:N49,
        }
    );
  }