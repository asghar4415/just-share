import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    app,
    initializeApp,
    auth,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    db,
    getDownloadURL,
    ref,
    storage,
    uploadBytesResumable,
} from "./firebase.js";


async function signup(event) {
    event.preventDefault();
    // console.log("signup");
    var email_signup = document.getElementById("email_sign");
    var name_sign = document.getElementById("name_sign");
    var password_signup = document.getElementById("password_sign");
    var gender_signup = document.getElementById("gender_sign")

    try {
        const success = await createUserWithEmailAndPassword(auth, email_signup.value, password_signup.value);
        // console.log(success, "success");
        const uid = success.user.uid;
        // localStorage.setItem("uid", uid);
        // console.log(uid, "uid");
        // console.log(gender_signup.value);

        if(gender_signup.value == 'm')
        {
            var UserFromSignup = {
                email: email_signup.value,
                name: name_sign.value,
                about: " ", // Set a default value, or use null if that's more appropriate
                 imageURL: "https://firebasestorage.googleapis.com/v0/b/just-share-bb959.appspot.com/o/images%2Fman.jpg?alt=media&token=ec2be95a-2409-4f87-9acb-448d3397fc78", // You may want to set a default value for imageURL as well
                uid: uid,
                gender: gender_signup.value,
            }
        }
        else
        {
            var UserFromSignup = {
                email: email_signup.value,
                name: name_sign.value,
                about: " ", // Set a default value, or use null if that's more appropriate
                 imageURL: "https://firebasestorage.googleapis.com/v0/b/just-share-bb959.appspot.com/o/images%2Fwoman.jpg?alt=media&token=9dce94b6-2df3-4fbb-b30e-5f1a342f2645", // You may want to set a default value for imageURL as well
                uid: uid,
                gender: gender_signup.value,
            }
        }
        
        
        const docRef = await addDoc(collection(db, "users"), UserFromSignup);

        alert("User sign up successful");
        window.location.href = "index.html";

    } catch (error) {
        // console.log(error, "error");
        alert(error.message);
    }
}

window.signup = signup;

function login(event) {
    event.preventDefault();
    // console.log("login");

    const email_login = document.getElementById("email_login");
    const password_login = document.getElementById("password_login");
    signInWithEmailAndPassword(auth, email_login.value, password_login.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
            localStorage.setItem("uid", user.uid);  
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}
window.login = login;


// if user is already signed in then redirect to dashboard
window.addEventListener("DOMContentLoaded", function () {
    var uid=localStorage.getItem("uid");
    if(uid)
    {
        window.location.href="dashboard.html";
    }
    // console.log(uid,"uid");
});

