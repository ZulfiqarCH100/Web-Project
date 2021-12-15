import { Component } from '@angular/core';
//The library required to make components.

//This @Component is called a decorator function which is called at runtime.
@Component({
  selector: 'header-selector',
  //A selector instructs Angular to instantiate this component wherever it finds the corresponding tag in template HTML. For example, consider a component hello-world.component.ts that defines its selector as app-hello-world. This selector instructs Angular to instantiate this component any time the tag <app-hello-world> appears in a template.
  template: '<h2>Working</h2>',
  //template is the render function of react, tells what to print.
  //TemplateUrl can be used to display a seperate html file for the component.
  //styleUrls are used to define css files for html. It is an array [].
})
export class HeaderComponent {
  //This class defines the behaviour of the component.
}

//The first componant to run is app.component.ts which renders app.component.html
