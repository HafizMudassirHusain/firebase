import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDN3qVhonsM16PTUhuj4GnLUtMmdLdOdh4",
  authDomain: "firstpro-6970d.firebaseapp.com",
  projectId: "firstpro-6970d",
  storageBucket: "firstpro-6970d.appspot.com",
  messagingSenderId: "543837521380",
  appId: "1:543837521380:web:6fc8f9cbfd4c0c5ff5b3f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let getinp = document.getElementById('inp');
let getbtn = document.getElementById('add');
let getUl = document.getElementById('ul');

if (getbtn) {
  getbtn.addEventListener('click', async () => {
    getUl.innerHTML = '';
    const docRef = await addDoc(collection(db, "todos"), {
      title: getinp.value,
    });
    console.log("Document written with ID: ", docRef.id);
    fetchData();
    getinp.value = ''
  });
}

async function fetchData() {
  getUl.innerHTML = '';
  const q = collection(db, "todos");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    getUl.innerHTML += `<li>${doc.data().title} <button onclick="edit('${doc.id}')"> Edit </button> 
    <button onclick="delTodo('${doc.id}')"> Delete </button></li>`;
  });
}

fetchData();

window.fetchData = fetchData;

async function delTodo(id) {
  getUl.innerHTML = '';
  await deleteDoc(doc(db, "todos", id));
  fetchData();
}

window.delTodo = delTodo;



async function edit(id){
  getUl.innerHTML = ''
    const washingtonRef = doc(db, "todos",id);
var pro = prompt('enter new things')
await updateDoc(washingtonRef, {
  title: pro
});
fetchData();

 }
 window.edit = edit

 
function delall() {
    getUl.innerHTML = ""
    const todosRef = collection(db, "todos");
    
    getDocs(todosRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting documents: ", error);
      });
      getinp.value = '';
  }
  
  
  window.delall = delall