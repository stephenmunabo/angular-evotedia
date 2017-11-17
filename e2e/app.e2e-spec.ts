import { AfritainersPage } from './app.po';

describe('afritainers App', () => {
  let page: AfritainersPage;

  beforeEach(() => {
    page = new AfritainersPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
