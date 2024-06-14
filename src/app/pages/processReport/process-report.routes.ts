import { Routes } from '@angular/router';
import { LayoutReportComponent } from './layout-report/layout-report.component';

export const REPORT_ROUTES: Routes = [
	{
		path: '',
		component: LayoutReportComponent,
		// children: [
		// 	{ path: 'final-report', component: FinalReportComponent },
		// 	{ path: 'by-record', component: ReportByRecordComponent },
		// 	{ path: '**', redirectTo: 'final-report' },
		// ]
	},
];
