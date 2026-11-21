import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Countries } from '../services/countries';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  countries: any[] = [];
  cargando = true;
  error = false;
  paisesFiltrados: any[] = [];

 constructor(
  private countriesService: Countries,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.paisesFiltrados = data;
        this.cargando = false;
         this.cdr.markForCheck();
      },
      error: () => {
        this.error = true;
        this.cargando = false;
         this.cdr.markForCheck();
      },
    });
  }
   buscar(event: any) {
    const texto = (event.target.value || '').toLowerCase();
    this.paisesFiltrados = this.countries.filter((pais) =>
      pais.name.common.toLowerCase().includes(texto)
    );
  }
}