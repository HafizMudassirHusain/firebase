
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getFirestore , collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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
