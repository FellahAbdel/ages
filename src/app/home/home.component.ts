import { Component } from '@angular/core';
import { FlagComponent } from '../flag/flag.component';
import { AgesComponent } from '../ages/ages.component';
import { SeparateurComponent } from '../separateur/separateur.component';
import { ActiviteComponent } from '../activite/activite.component';
import { EquipeComponent } from '../equipe/equipe.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    FlagComponent,
    AgesComponent,
    SeparateurComponent,
    ActiviteComponent,
    EquipeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
