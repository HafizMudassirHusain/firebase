
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getFirestore , collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDN3qVhonsM16PTUhuj4GnLUtMmdLdOdh4",
    authDomain: "firstpro-6970d.firebaseapp.com",
    projectId: "firstpro-6970d",
    storageBucket: "firstpro-6970d.appspot.com",
    messagingSenderId: "543837521380",
    appId: "1:543837521380:web:6fc8f9cbfd4c0c5ff5b3f1"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const db = getFirestore(app)

  let getBtn = document.querySelector("#btn")
  getBtn.addEventListener('click',()=>{
      let getInp = document.querySelector("#inp")
      const file = getInp.files[0]
      const storageRef = ref(storage, `images/${file.name}`);
    //   console.log(storageRef)
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
            let getpname = document.getElementById('product')
            let getpdes = document.getElementById('pdes')
            let getpprice = document.getElementById('price')

            const docRef = await addDoc(collection(db, "images"), {
                names : getpname.value,
                pdes: getpdes.value,
                price: getpprice.value,
                url: downloadURL
              });
              console.log("Document written with ID: ", docRef.id);
              
          });
        }
      );
})