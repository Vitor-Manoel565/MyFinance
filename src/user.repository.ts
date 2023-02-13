export class RepositoryUsers {
  private user = [];
  async salvar(user) {
    this.user.push(user);
  }
}
