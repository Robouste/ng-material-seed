import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule, RouterModule],
	exports: [NavbarComponent, ToolbarComponent],
	declarations: [NavbarComponent, ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
