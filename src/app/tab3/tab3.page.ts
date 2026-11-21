import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Countries } from '../services/countries';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  countries: any[] = [];
  codigoA = '';
  codigoB = '';
  cargando = true;
  error = false;

  constructor(
    private countriesService: Countries,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
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

  get paisA() {
    return this.countries.find((pais) => pais.cca3 === this.codigoA);
  }

  get paisB() {
    return this.countries.find((pais) => pais.cca3 === this.codigoB);
  }

  elegirA(event: any) {
    this.codigoA = event.detail.value;
  }

  elegirB(event: any) {
    this.codigoB = event.detail.value;
  }

  idiomas(pais: any): string {
    return pais.languages ? Object.values(pais.languages).join(', ') : 'Sin datos';
  }

  monedas(pais: any): string {
    return pais.currencies
      ? Object.values(pais.currencies).map((m: any) => m.name).join(', ')
      : 'Sin datos';
  }
}