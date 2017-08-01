import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	@Input() sidenav: MdSidenav;

	constructor() { }

	ngOnInit() {
	}

	closeSidenav() {
		this.sidenav.close();
	}

}
