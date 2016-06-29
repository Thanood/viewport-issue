export class App {
  firstName = 'John';
  lastName = 'Doe';

  configureRouter(config, router) {
      config.map([
         {
            route: ['', 'page1'],
            title: 'page 1',
            nav: true,
            viewPorts: {
                default: { moduleId: './page1' },
                header: { moduleId: 'page1-header' }
            }
        },
        {
            route: 'page2',
            title: 'page 2',
            nav: true,
            viewPorts: {
                default: { moduleId: './page1' },
                header: { moduleId: 'no-header' }
            }
        } 
      ]);
      this.router = router;
  }
}
