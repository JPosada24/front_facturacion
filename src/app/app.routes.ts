import { Routes } from '@angular/router';
import { MainFormComponent } from './pages/executionForm/main-form/main-form.component';

export const routes: Routes = [
	{
		path: 'execute-rpa',
		component: MainFormComponent,
	},
	{
		path: 'process-report',
		loadChildren: () =>
			import('./pages/processReport/process-report.routes').then(
				(m) => m.REPORT_ROUTES
			),
	},
    {
        path: '',
        redirectTo: '/execute-rpa',
        pathMatch: 'full'
    }
];
