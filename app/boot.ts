import {bootstrap}    from '@angular/platform-browser-dynamic'
import { provideRouter, Routes } from '@ngrx/router';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';

import {AppComponent} from './components/app.component'
import {HelpComponent} from './components/help/help.component'
import {AboutComponent} from './components/about/about.component'

const routes: Routes = [
	{ path: '/', component: AboutComponent },
	{ path: '/about', component: AboutComponent },
	{ path: '/help', component: HelpComponent }
]

bootstrap(AppComponent, [
	provideRouter(routes),
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
// bootstrap(AppComponent, [
// 	provideRouter(routes)
// ]);
