import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  nip: string = '';
  nama: string = '';
  jabatan: string = '';
  gol: string = '';
  jnstun: string = '';
  gaji: string = '';

  simpan() {
    console.log(this.nip);
    console.log(this.nama);
    console.log(this.jabatan);
    console.log(this.gol);
    console.log(this.jnstun);
    console.log(this.gaji);

    localStorage.setItem('nip', this.nip);
    localStorage.setItem('nama', this.nama);
    localStorage.setItem('jabatan', this.jabatan);
    localStorage.setItem('gol', this.gol);
    localStorage.setItem('jnstun', this.jnstun);
    localStorage.setItem('gaji', this.gaji);
    this.clear();
  }

  clear() {
    this.nip = '';
    this.nama = '';
    this.jabatan = '';
    this.gol = '';
    this.jnstun = '';
    this.gaji = '';
  }
}
