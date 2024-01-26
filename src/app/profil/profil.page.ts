import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  nip: string | null = localStorage.getItem('nip');
  nama: string | null = localStorage.getItem('nama');
  jabatan: string | null = localStorage.getItem('jabatan');
  gol: string | null = localStorage.getItem('gol');
  jnstun: string | null = localStorage.getItem('jnstun');
  gaji: string | null = localStorage.getItem('gaji');
}
