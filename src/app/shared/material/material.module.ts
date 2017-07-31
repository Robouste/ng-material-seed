import { NgModule } from '@angular/core';
import { MdTabsModule, MdSidenavModule, MdButtonModule, MdIconModule } from '@angular/material';

const MODULES = [
	MdTabsModule,
	MdSidenavModule,
	MdButtonModule,
	MdIconModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
