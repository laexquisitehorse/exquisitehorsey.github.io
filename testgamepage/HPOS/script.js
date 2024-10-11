function checkUserSignIn() {
  let isSignedIn = sessionStorage.getItem('userStatus') === 'signed-in';
  if (!isSignedIn) {  
    window.location.href = 'sign-in.html';
  } else {
    let userStatus = 'signed-in';
    console.log('User is already signed in:', userStatus);
  }
}
window.onload = checkUserSignIn;
const userType = 'Developer';

function setUserType() {
  const userTypeSpan = document.getElementById('userType');
  userTypeSpan.textContent = userType;
}
window.onload = setUserType;
