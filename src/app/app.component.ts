import { DividerModule } from 'primeng/divider';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FlagComponent } from './flag/flag.component';
import { AgesComponent } from './ages/ages.component';
import { ActiviteComponent } from './activite/activite.component';
import { SeparateurComponent } from './separateur/separateur.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FlagComponent,
    AgesComponent,
    ActiviteComponent,
    SeparateurComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ages-angular-webapp';
}
