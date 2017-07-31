import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from "@angular/material";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() sidenav: MdSidenav;
	public pageTitle: string;

	constructor(
		private router: Router,
		private titleService: Title,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.router.events
			.filter((event) => event instanceof NavigationEnd)
  			.map(() => this.activatedRoute)
			.map((route) => {
				while (route.firstChild) {
					route = route.firstChild;
				}
				return route;
			})
			.filter((route) => route.outlet === 'primary')
			.mergeMap((route) => route.data)
			.subscribe((event) => {
				this.titleService.setTitle(event['title']);
				this.pageTitle = this.titleService.getTitle();
			});
	}

	toggleSidenav() {
		this.sidenav.opened = !this.sidenav.opened;
	}

}
