import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormToggleService {

  public selectedValue: string = '';

  constructor() { }

  public setSelectedValue(value: string): void {
    this.selectedValue = value;
  }
}
