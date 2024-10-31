import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen  = !this.isMenuOpen ;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}