import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { Options } from '../../../../core/interfaces/options.interface';

@Component({
	selector: 'form-toggle-button',
	standalone: true,
	imports: [],
	templateUrl: './toggle-button.component.html',
	styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent implements OnInit {

	@Input()
	public options: Options[] = [];

	@Output()
	public selectedOptionChange = new EventEmitter<string>();

	public selectedOption?: string;

	ngOnInit(): void {
		this.selectedOption = this.options[0].value;
	}

	onSelectionChange(option: string) {
		this.selectedOption = option;
		this.selectedOptionChange.emit(option);
	}
}
