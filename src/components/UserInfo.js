export default class UserInfo {
  constructor({ name, job, avatar }) {
    this.name = name;
    this.job = job;
    this.avatar = avatar;
  }

  getUserInfo = () => {
    return {
      name: this.name.textContent,
      job: this.job.textContent,
    };
  };
  setUserInfo(data) {
    this.name.textContent = data.name;
    this.job.textContent = data.about;
    this.avatar.style.backgroundImage = `url(${data.avatar})`;
  }
}
