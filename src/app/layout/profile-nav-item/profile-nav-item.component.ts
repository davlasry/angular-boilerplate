import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'reali-profile-nav-item',
    templateUrl: './profile-nav-item.component.html',
    styleUrls: ['./profile-nav-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileNavItemComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
