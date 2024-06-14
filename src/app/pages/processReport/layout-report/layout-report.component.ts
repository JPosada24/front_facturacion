import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { DataTableComponent } from '../components/data-table/data-table.component';

@Component({
  selector: 'process-report-layout-report',
  standalone: true,
  imports: [RouterOutlet, TabViewModule, DataTableComponent],
  templateUrl: './layout-report.component.html',
  styleUrl: './layout-report.component.css'
})
export class LayoutReportComponent {

}
