const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const baseDeDatos = require("./productos");


const firebaseConfig = {
    apiKey: "AIzaSyDJ6RNPI95Rab-CAa47bSopek1FQG4S-7c",
    authDomain: "cursoalfaweb.firebaseapp.com",
    projectId: "cursoalfaweb",
    storageBucket: "cursoalfaweb.appspot.com",
    messagingSenderId: "650148172245",
    appId: "1:650148172245:web:a808515296442bf08a6d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const queryColecction = collection(db, 'items');


const callback = () => {
    console.log('proceso completado exitosamente');
    process.exit();
}
let itemsProcessed = 0;


baseDeDatos.forEach((obj, index, array) => {
    const newProduct = {
        title: obj.name,
        price: obj.price,
        imagen: obj.image,
        description: obj.description,
        stock: obj.stock,
    }
    addDoc(queryColecction, newProduct)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            itemsProcessed++;
            if (itemsProcessed === array.length) {
                callback();
            }
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        })
});