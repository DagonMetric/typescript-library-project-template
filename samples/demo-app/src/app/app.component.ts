import { Component, ViewEncapsulation } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    isProd = false;

    constructor() {
        this.isProd = environment.production;
    }
}
