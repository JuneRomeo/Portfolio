import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      
      // Trigger error popup alert
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please input a valid email address and fill out all required fields.',
        confirmButtonColor: '#ff5722'
      });
      return;
    }

    this.isSubmitting = true;

    // Submit data to Formspree via fetch
    fetch('https://formspree.io/f/xgaokjoy', {
      method: 'POST',
      body: JSON.stringify(this.contactForm.value),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.isSubmitting = false;
      if (response.ok) {
        // Trigger success popup alert
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully!',
          confirmButtonColor: '#ff5722'
        });
        this.contactForm.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Oops! There was a problem sending your message. Please try again.',
          confirmButtonColor: '#ff5722'
        });
      }
    })
    .catch(() => {
      this.isSubmitting = false;
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Oops! Network error. Please check your connection and try again.',
        confirmButtonColor: '#ff5722'
      });
    });
  }
}