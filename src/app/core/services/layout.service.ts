import { Injectable, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService implements OnDestroy {
    private isMobile = new BehaviorSubject(false);
    isMobile$ = this.isMobile.asObservable();
    mobileQuery: MediaQueryList;

    constructor(private mediaMatcher: MediaMatcher) {
        this.mobileQuery = mediaMatcher.matchMedia('(max-width: 500px)');
        this.onMobileChange();

        this.mobileQuery.addEventListener('change', this.onMobileChange.bind(this));
    }

    onMobileChange() {
        this.isMobile.next(this.mobileQuery.matches);
    }

    ngOnDestroy() {
        this.mobileQuery.removeEventListener('change', this.onMobileChange);
    }

}
