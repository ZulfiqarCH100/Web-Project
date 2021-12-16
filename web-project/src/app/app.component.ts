import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag: any;

//Runs first.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Renders this page.
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: any) => {
      gtag('config', 'G-WEHB3PHSMJ', {
        page_path: event.urlAfterRedirects,
      });
    });
  }
}
