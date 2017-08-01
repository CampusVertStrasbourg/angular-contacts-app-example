import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { User } from '../../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() user: User = {
    id: undefined,
    firstName: '',
    familyName: '',
    mail: '',
    phoneNumber: ''
  };

  @Output() onSubmit = new EventEmitter<User>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.user.id],
      'firstName': [this.user.firstName, Validators.required],
      'familyName': [this.user.familyName, Validators.required],
      'mail': [this.user.mail, Validators.required],
      'phoneNumber': [this.user.phoneNumber, Validators.required]
    })
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
    else {
      console.error('Form not valid');
    }
  }

}
