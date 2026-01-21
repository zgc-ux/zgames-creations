import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((error) => alert(error.message));
}
