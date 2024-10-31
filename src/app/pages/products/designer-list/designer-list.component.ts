import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-designer-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './designer-list.component.html',
  styleUrls: ['./designer-list.component.scss']
})
export class DesignerListComponent {
  designers = [
    { name: 'AFNAN', logo: 'afnan-logo.jpeg' },
    { name: 'AL HARAMAIN', logo: 'al-haramain-logo.png' },
    { name: 'ARMAF', logo: 'armaf-logo.webp' },
    { name: 'BHARARA', logo: 'bharara-logo.webp' },
    { name: 'LATTAFA', logo: 'lataffa-logo.webp' },
    { name: 'ORIENTICA', logo: 'orientica-logo.webp' },
    { name: 'RASASI', logo: 'rasasi-logo.webp' }
  ];
  

  constructor(private router: Router) {}

  selectDesigner(designer: any) {
    this.router.navigate(['/products', designer.name.toLowerCase()]);
  }
}
