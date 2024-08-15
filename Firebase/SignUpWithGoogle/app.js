import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

      const firebaseConfig = {
  apiKey: "AIzaSyAkP-QAWON55lqKUcV2I8pXb-oHpQWW1Pw",
  authDomain: "second-pro-f9564.firebaseapp.com",
  projectId: "second-pro-f9564",
  storageBucket: "second-pro-f9564.appspot.com",
  messagingSenderId: "544135828286",
  appId: "1:544135828286:web:67b5c9099171e7d356126f"
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