  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 
  import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA4vh55jxmsSyFocm0iVirOKWKIi913giM",
    authDomain: "e-commerce-bee09.firebaseapp.com",
    projectId: "e-commerce-bee09",
    storageBucket: "e-commerce-bee09.appspot.com",
    messagingSenderId: "1089328260784",
    appId: "1:1089328260784:web:c1025fe271b00ca8c63d75"
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



