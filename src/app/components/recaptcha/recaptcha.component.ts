import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.scss']
})
export class RecaptchaComponent implements OnInit {
  theme = 'Light'
  size = 'Normal'
  type='Image'
  lang = 'en'
  registerForm: FormGroup;
  submitted = false;
   aFormGroup: FormGroup;
  siteKey = '6LeL1cwbAAAAAL49LaLTj7YtV-Rwb3YcJxx7Qi6x'
  constructor(private formBuilder: FormBuilder,  private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      recaptcha: ['', Validators.required]          // use recapcha there form validation which help us and cannot submit form until we cannot make it true
  });

  }
  get f() { return this.registerForm.controls; }
  public async onSubmit(): Promise<void> {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm.value)
    alert(`Form Submitted Succesfully${this.registerForm.value}`)
  }
}
