import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() sidenav: MdSidenav;

	constructor() { }

	ngOnInit() {
		console.log(this.sidenav);
	}

	toggleSidenav() {
		this.sidenav.opened = !this.sidenav.opened;
	}

}
