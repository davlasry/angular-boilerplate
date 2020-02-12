import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable()
export class LayoutService {
    isMobile$: Observable<any>;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.isMobile$ = breakpointObserver.observe(['(max-width: 500px)']);
    }
}
