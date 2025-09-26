// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Adicionar SDKs para os produtos Firebase que deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração do Firebase do aplicativo web
const firebaseConfig = {
  apiKey: "AIzaSyBpvOFVXOtXeU5THWR01KB4gr0KF2p4Q5Q",
  authDomain: "virtual-bookshelf-db.firebaseapp.com",
  projectId: "virtual-bookshelf-db",
  storageBucket: "virtual-bookshelf-db.firebasestorage.app",
  messagingSenderId: "875707748411",
  appId: "1:875707748411:web:93262aa9741511c968cc1e"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar o Firestore
export const db = getFirestore(app);