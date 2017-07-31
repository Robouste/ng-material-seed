import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
	imports: [],
	exports: [LayoutComponent, NavbarComponent, ToolbarComponent],
	declarations: [LayoutComponent, NavbarComponent, ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
