export default class UserInfo {
  constructor({ name, job }) {
    this.name = name;
    this.job = job;
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
