import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    	<h3>00-ng2-typescript-webpack</h3>
			<nav>
			  <a linkTo="/help">Help</a>
			  <a linkTo="/about">About</a>
			</nav>
			<route-view></route-view>
    `,
  })
export class AppComponent {}	
