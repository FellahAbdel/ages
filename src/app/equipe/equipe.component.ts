import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  imports: [NgFor],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css',
})
export class EquipeComponent {
  titre: string = 'Notre équipe';
  equipe = [
    {
      imgUrl: 'assets/images/aissata.jpeg',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
    {
      imgUrl: 'url1',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
    {
      imgUrl: 'url1',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
    {
      imgUrl: 'url1',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
    {
      imgUrl: 'url1',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
    {
      imgUrl: 'url1',
      nom: 'DIALLO',
      prenom: 'Aissata',
      role: 'Chargée Communication',
    },
  ];
}
