import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, 
  collection, 
  addDoc,
getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { getStorage , 
  ref, 
  uploadBytesResumable,
   getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
 
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
const storage = getStorage(app);
const db = getFirestore(app);

var fileInput = document.getElementById('pimg');
let getAddItem = document.getElementById('AddItem')
let getMenuDiv = document.getElementById('menu-objects')
getAddItem.addEventListener('click', () => {
  
  const file = fileInput.files[0];
const storageRef = ref(storage, `images/${file.name}`);
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
console.log(error)
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
        let pname = document.getElementById('pname')
        let pdes = document.getElementById('pdes')
        let pprice = document.getElementById('pprice')
const docRef = await addDoc(collection(db, "Items"), {
pname: pname.value,
pdes: pdes.value,
pprice: pprice.value,
image: downloadURL
});
console.log("Document written with ID: ", docRef.id);
fatchData()
pname.innerHTML = '';
pdes.innerHTML = '';
pprice.innerHTML = '';
fileInput.file = ''
  }

);

})

})

async function fatchData(){
  const q = collection(db, "Items")

const querySnapshot = await getDocs(q);
getMenuDiv.innerHTML = ''
querySnapshot.forEach((doc) => {
getMenuDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${doc.data().image}" class="card-img-top" alt="not found">
  <div class="card-body">
    <h5 class="card-title">${doc.data().pname}</h5>
    <p class="card-text">${doc.data().pdes}</p>
    <p class="card-text">${doc.data().pprice}</p>
    <a href="#" class="btn btn-primary">Edit</a>
    <a href="#" class="btn btn-danger">Delete</a>

  </div>
</div>`
  console.log(doc.id, " => ", doc.data());

});
}

fatchData()









// =======================================================================

function view1(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='block';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
window.view1 = view1 
function view2(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='block';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
window.view2 = view2
function view3(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='block';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
function view4(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='block';
  view.childNodes[9].style.display ='none';
}
function view5(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='block';
}
