import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
