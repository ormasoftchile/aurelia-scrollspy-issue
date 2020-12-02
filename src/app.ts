import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: './welcome',
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'scrollspy',
        name: 'scrollspy',
        moduleId: './scrollspy',
        nav: true,
        title: 'Scrollspy'
      }
    ]);

    this.router = router;
  }
}
