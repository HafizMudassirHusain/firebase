
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

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
var getbtn = document.getElementById('subtn')
if(getbtn){
    getbtn.addEventListener('click',function(){
        var name = document.getElementById('username')
        var email = document.getElementById('email')
        var password = document.getElementById('password')
        createUserWithEmailAndPassword(auth, email.value, password.value, name.value)
     .then((userCredential) => {
       const user = userCredential.user;
       console.log("user ",user)
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("error", errorCode,errorMessage)
     });
    })
}

var getinbtn = document.getElementById('sibtn')
if(getinbtn){
    getinbtn.addEventListener('click',function(){
        var email = document.getElementById('email')
        var password = document.getElementById('password')
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user ",user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorCode,errorMessage)
                });
                })
}
