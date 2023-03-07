class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row"> 
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
          </div>
          
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-Secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-Success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group>
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page heading mb-3">Latest Repos </h3>
      <div id="repos"></div>
    `;
  }
}