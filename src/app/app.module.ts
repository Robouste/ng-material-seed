import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TestComponent
	],
	imports: [
		RouterModule.forRoot(ROUTES, { useHash: true }),
		SharedModule,
		LayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
