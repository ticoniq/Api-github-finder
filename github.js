class Github {
  constructor() {
    this.client_id = '99586e18fd36ac29b8bc';
    this.client_secret = 'd081f13679da4b4f58ad7e96d0b03f4528718962';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}