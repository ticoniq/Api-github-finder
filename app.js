// Init GitHub class 
const github = new Github;

// Init ui class 
const ui = new UI;


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
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile 
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});