import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Countries } from '../services/countries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  countries: any[] = [];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionSeleccionada = 'Africa';
  paisesDeRegion: any[] = [];
  cargando = true;
  error = false;
  paisSeleccionado: any = null;
  modalAbierto = false;

  constructor(
    private countriesService: Countries,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.filtrarRegion();
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

  cambiarRegion(event: any) {
    this.regionSeleccionada = event.detail.value;
    this.filtrarRegion();
  }

  filtrarRegion() {
    this.paisesDeRegion = this.countries.filter(
      (pais) => pais.region === this.regionSeleccionada
    );
  }

  contarPaises(region: string): number {
    return this.countries.filter((pais) => pais.region === region).length;
  }

  abrirDetalle(pais: any) {
    this.paisSeleccionado = pais;
    this.modalAbierto = true;
  }

  cerrarDetalle() {
    this.modalAbierto = false;
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