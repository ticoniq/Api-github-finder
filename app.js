const github = new Github;
// Search input 
const searchUser = document.getElementById('searchUser');

// Search input eventlistener 
searchUser.addEventListener('keyup', (e) => {
  // get input text 
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert 
      } else {
        // Show profile 
      }
    });
  }else {
    // Clear profile
  }
});