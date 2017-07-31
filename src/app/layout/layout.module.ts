import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule],
	exports: [LayoutComponent, NavbarComponent, ToolbarComponent],
	declarations: [LayoutComponent, NavbarComponent, ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
