import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [SharedModule, RouterModule],
	exports: [SidenavComponent, ToolbarComponent],
	declarations: [SidenavComponent, ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
