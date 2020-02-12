import { Component } from '@angular/core';
import { LayoutService } from './core/services/layout.service';

@Component({
    selector: 'reali-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isMobile: boolean;
    isMobileNav = false;

    constructor(private layoutService: LayoutService) {
        this.layoutService.isMobile$.subscribe((result) => {
            // console.log(result);
            this.isMobile = result.matches;
        });
    }

    onToggleMobileNav() {
        this.isMobileNav = !this.isMobileNav;
    }
}
