import { Component } from '@angular/core';
import { LayoutService } from './core/services/layout.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'reali-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isMobile$: Observable<boolean>;
    isMobileNav = false;

    constructor(private layoutService: LayoutService) {
        this.isMobile$ = this.layoutService.isMobile$;
    }

    onToggleMobileNav() {
        this.isMobileNav = !this.isMobileNav;
    }
}
