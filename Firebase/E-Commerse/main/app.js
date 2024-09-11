  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 
  import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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

  var getbtn = document.getElementById('btn')
  if(getbtn){
    getbtn.addEventListener('click', function(){
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('data gaaya')
    if(user){
      location.href = './SignIn.html'
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
})
  }

var getinbtn = document.getElementById('inbtn')
if(getinbtn){
    getinbtn.addEventListener('click', function(){
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('successFul ')
    console.log(user)
    if(email.value == 'admin@gmail.com' && password.value == '123456'){
      location.href = '../Admin/admin.html'
    }
    else if(email.value == user.email && password.vlaue == user.password){
        location.href = '../Users/user.html'
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    alert('inValid email email or password')

  });
    })
}



