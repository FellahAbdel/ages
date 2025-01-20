import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteComponent } from './activite/activite.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nos-activites', component: ActiviteComponent },
  { path: 'notre-equipe', component: EquipeComponent },
  { path: 'contactez-nous', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
