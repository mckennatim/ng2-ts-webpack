import {bootstrap}    from '@angular/platform-browser-dynamic'
import { provideRouter, Routes } from '@ngrx/router';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import {provideStore} from '@ngrx/store';

import {AppComponent} from './components/app.component'
import {HelpComponent} from './components/help/help.component'
import {AboutComponent} from './components/about/about.component'
import {CounterComponent} from './components/counter/counter.component.ts'

import {counter} from './reducers/counter';



const routes: Routes = [
	{ path: '/', component: AboutComponent },
	{ path: '/about', component: AboutComponent },
	{ path: '/help', component: HelpComponent },
	{ path: '/cnt', component:CounterComponent}
]

bootstrap(AppComponent, [
	provideRouter(routes),
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	provideStore({ counter }, { counter: 0 })
]);
// bootstrap(AppComponent, [
// 	provideRouter(routes)
// ]);
