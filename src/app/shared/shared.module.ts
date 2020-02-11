import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


const MATERIAL_MODULES = [
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        ...MATERIAL_MODULES
    ]
})
export class SharedModule {
}
