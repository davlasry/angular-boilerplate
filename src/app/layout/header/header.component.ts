import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'reali-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    @Input()
    isMobileNav = false;

    @Input()
    isMobile: boolean;

    @Output()
    toggleMobileNav = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClickToggleMobileNav() {
        this.toggleMobileNav.emit();
    }
}
