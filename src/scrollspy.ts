import {autoinject} from 'aurelia-framework';
import $ from 'jquery';

@autoinject
export class Scrollspy {
  public heading: string = 'Github Users';
  public users: any[] = [];

  constructor() {
  }

  attached() {
    $('#navbar-example2').scrollspy();
  }

  async activate(): Promise<void> {
  }
}
