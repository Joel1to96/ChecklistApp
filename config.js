   <script type="module">
     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
     import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
     import { firebaseConfig } from './config.js';

     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);

     // ... resto de tu código ...
   </script>
