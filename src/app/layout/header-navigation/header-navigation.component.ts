import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'reali-header-navigation',
    templateUrl: './header-navigation.component.html',
    styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

    isSignedIn = false;

    constructor() {
    }

    ngOnInit() {
    }

    onSignIn() {
        this.isSignedIn = true;
    }
}
