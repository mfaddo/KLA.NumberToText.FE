import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberToTextService } from '../number-to-text.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-number-to-text',
  templateUrl: './number-to-text.component.html',
  styleUrls: ['./number-to-text.component.css']
})
export class NumberToTextComponent {
  form!: FormGroup;  // Form group for number input
  text: string = ''; // Text result from the service
  showError: boolean = false; // Flag to indicate whether to show error message


  constructor(private fb: FormBuilder , private numberToTextService: NumberToTextService) {

  }

  ngOnInit() {
    this.createForm(); // Initialize the form
    this.subscribeToInputChanges(); // Subscribe to input changes
  }

    // Create form with number input and validation
  createForm() {
    this.form = this.fb.group({
      numberInput: ['', [Validators.required, this.numberFormatValidator]]
    });
  }

  // Subscribe to input changes for number input
  subscribeToInputChanges() {
    const numberInput = this.form.get('numberInput');
    if (numberInput) {
      numberInput.valueChanges.pipe(
        debounceTime(500), // Wait for 500ms after user stops typing
        distinctUntilChanged(), // Only emit if the value has changed
        filter(() => numberInput.valid && numberInput.value !== '') // Only emit if the input is valid and not empty
      ).subscribe(() => {
        this.onInput(); // Call onInput method when valid input changes
      });

      numberInput.statusChanges.subscribe(status => {
        this.showError = status === 'INVALID';
      });
    }
  }

    // Custom validator to check the format of the input number
  numberFormatValidator(control: any) {
    const regex = /^\d{1,9}(\,\d{1,2})?$/;  // Regular expression for number format
    return control.value && !regex.test(control.value) ? { invalidNumberFormat: true } : null;
  }

    // Method to handle input changes and call the service
  onInput() {
    const numberInput = this.form.get('numberInput');
    if (numberInput?.valid) {// Check if input is valid
      // Call the service to get the text for the input number
      this.numberToTextService.getText(numberInput.value).subscribe(result => {
        this.text = result;
      });
    } else {
      this.text = ''; // Clear the text result if input is invalid
    }
  }
}