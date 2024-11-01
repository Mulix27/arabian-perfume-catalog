import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet, Router} from '@angular/router';
import { FirestoreService } from '../../../services/firestore.service';
import { Observable, of } from 'rxjs';
import { Perfume } from '../../../models/perfume.model';

@Component({
  selector: 'app-perfume-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './perfume-list.component.html',
  styleUrls: ['./perfume-list.component.scss']
})
export class PerfumeListComponent implements OnInit {
  perfumes$: Observable<Perfume[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let designer = params.get('designer');
      if (designer) {
        designer = designer.toUpperCase();
        console.log("Nombre del diseñador (normalizado):", designer);
        this.perfumes$ = this.firestoreService.getPerfumesByDesigner(designer);
      }
    });
  }  
  
}