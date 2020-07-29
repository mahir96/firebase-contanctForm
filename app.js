// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-oeNDOBjVJg0PLJ9qc00TATpMHou1hIc",
  authDomain: "test-feac5.firebaseapp.com",
  databaseURL: "https://test-feac5.firebaseio.com",
  projectId: "test-feac5",
  storageBucket: "test-feac5.appspot.com",
  messagingSenderId: "366047629212",
  appId: "1:366047629212:web:475aaed9b215e055224259",
  measurementId: "G-0WCRE5QH6X",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Create firebase database
let messageRef = firebase.database().ref("message");

// Listening for form submit
document.getElementById("control-from").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // get values
  let name = getInputIdal("name");
  let email = getInputIdal("email");
  let message = getInputIdal("Message");

  saveMessage(name, email, message);

  // show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3sec
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

// function to get form value
function getInputIdal(id) {
  return document.getElementById(id).value;
}

// save data to firebase
function saveMessage(name, email, message) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
