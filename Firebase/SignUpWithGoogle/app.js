import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      auth.languageCode = 'en';
      const provider = new GoogleAuthProvider();
      var getbtn = document.getElementById('sibtn')
if(getbtn){
getbtn.addEventListener('click',function(){
signInWithPopup(auth, provider)
.then((result) => {
const credential = GoogleAuthProvider.credentialFromResult(result);
const user = result.user;
console.log(user);
window.location.href = './welcome.html'
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

});
})
        }
