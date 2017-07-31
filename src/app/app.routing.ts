import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'test', component: TestComponent
	}
];
