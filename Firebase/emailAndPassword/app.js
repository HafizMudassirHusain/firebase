
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyDN3qVhonsM16PTUhuj4GnLUtMmdLdOdh4",
    authDomain: "firstpro-6970d.firebaseapp.com",
    projectId: "firstpro-6970d",
    storageBucket: "firstpro-6970d.appspot.com",
    messagingSenderId: "543837521380",
    appId: "1:543837521380:web:6fc8f9cbfd4c0c5ff5b3f1"
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