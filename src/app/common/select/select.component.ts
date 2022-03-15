import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  _placeholder = 'Select an option...';

  isDropdownActive = false;
  selectedOption = '';

  @Input()
  set placeholder(text: string) {
    this._placeholder = text;
  }
  get placeholder() {
    return this._placeholder;
  }

  @Input() options: string[] = [];
  @Output() selectChange = new EventEmitter<string>();

  constructor() {}

  toggleDropdown(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }

  select(event: Event): void {
    this.selectedOption = (<HTMLInputElement>event.target).value;
    this.selectChange.emit(this.selectedOption);
    this.toggleDropdown();
  }
}
