/* Movement functions: */

document.addEventListener('keydown', function(event) {
  if (event.key === 'w' || event.key === 'W') {
    alert("key pressed: W");
  } else if (event.key === 'a' || event.key === 'A') {
    alert("key pressed: A");
  } else if (event.key === 's' || event.key === 'S') {
    alert("key pressed: S");
  } else if (event.key === 'd' || event.key === 'D') {
    alert("key pressed: D");
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'w' || event.key === 'W') {
    alert("key unpressed: W");
  } else if (event.key === 'a' || event.key === 'A') {
    alert("key unpressed: A");
  } else if (event.key === 's' || event.key === 'S') {
    alert("key unpressed: S");
  } else if (event.key === 'd' || event.key === 'D') {
    alert("key unpressed: D");
  }
});

