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
    this.name.textContent = data.nameInput;
    this.job.textContent = data.jobInput;
  }
}
