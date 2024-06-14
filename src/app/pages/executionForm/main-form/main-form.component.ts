import { Component, OnInit, inject } from '@angular/core';
import { ToggleButtonComponent } from '../components/toggle-button/toggle-button.component';
import { Options } from '../../../core/interfaces/options.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RpaService } from '../../../core/services/rpa.service';
import { ListadoRpa } from '../../../core/interfaces/rpa.interface';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
	selector: 'main-form',
	standalone: true,
	imports: [ToggleButtonComponent, TitleCasePipe, ReactiveFormsModule, CommonModule],
	templateUrl: './main-form.component.html',
	styleUrl: './main-form.component.css',
})
export class MainFormComponent {
	public filesOptions: Options[] = [
		{
			name: 'Todo',
			value: 'normal',
			formName: 'files',
		},
		{
			name: 'Personalizado',
			value: 'personalizado',
			formName: 'files',
		},
	];

	public incomeType: Options[] = [
		{
			name: 'Cédula',
			value: 'cedula',
			formName: 'incomeType',
		},
		{
			name: 'NIT',
			value: 'nit',
			formName: 'incomeType',
		},
	];

	public executionType: Options[] = [
		{
			name: 'Comenzar',
			value: 'normal',
			formName: 'executionType',
		},
		{
			name: 'Continuar',
			value: 'continuar',
			formName: 'executionType',
		},
		{
			name: 'Factura(s)Específica(s)',
			value: 'personalizado',
			formName: 'executionType',
		},
	];

	// Crear variables para cada toggle
	public fileSelected: string = '';
	public incomeTypeSelected: string = '';
	public executionTypeSelected: string = '';
	public rpaList?: ListadoRpa[];

	// Inyeccion de servicios
	private rpaService = inject(RpaService);
	private fb = inject(FormBuilder);

	// ngOnInit(): void {
	// 	this.rpaService.getRpas().subscribe(
	// 		(data) => {
	// 			this.rpaList = data.listado_rpas;
	// 		},
	// 		(error) => {
	// 			console.log('Error al obtener los datos', error);
	// 		}
	// 	);

	// 	console.log(this.rpaList);
	// }

	public mainForm = this.fb.group({
		selectedRpa: [''],
		selectedFile: [''],
		filesList: [''],
		selectedIncomeType: [''],
		selectedExecutionType: [''],
		identification: [''],
		nit: [''],
		invoiceList: [''],
	});

	onOptionChange(optionSelected: string) {
		this.mainForm.patchValue({
			selectedFile: optionSelected,
		})
	}

	imprimir(event: Event) {
		event.preventDefault();

		console.log(this.mainForm.value)
	}
}
