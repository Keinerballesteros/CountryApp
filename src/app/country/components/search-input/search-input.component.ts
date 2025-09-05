import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',

})
export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();

  initialValue = input<string>('');

  inputVaue = linkedSignal(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputVaue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 3000);


    onCleanup(() => clearTimeout(timeout));

  });
 }
