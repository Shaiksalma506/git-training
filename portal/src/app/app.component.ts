import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  password: string = '';

  login() {
    // In a real-world scenario, you would perform authentication here.
    // For simplicity, let's assume valid credentials for this example.
    if (this.username === 'demo' && this.password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
}
}
