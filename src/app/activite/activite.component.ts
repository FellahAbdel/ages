import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type MyArrayType = Array<{ titreActivite: string; description: string }>;

@Component({
  selector: 'app-activite',
  imports: [NgFor],
  templateUrl: './activite.component.html',
  styleUrl: './activite.component.css',
})
export class ActiviteComponent {
  titre: string = 'Nos activités';
  activites = [
    {
      titreActivite: 'Activité 1',
      description: "Description de l'activité 1",
    },
    {
      titreActivite: 'Activité 2',
      description: "Description de l'activité 2",
    },
  ];
}
