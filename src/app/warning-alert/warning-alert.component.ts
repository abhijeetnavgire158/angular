import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p> This is a warning to you. You are in danger!
    `,
    styles: [`
        p {
            color: red
        }
    `]
})

export class WarningAlertComponent {

}