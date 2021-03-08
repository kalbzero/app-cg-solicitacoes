import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesFormComponent } from './components/solicitacoes-form/solicitacoes-form.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitacoesComponent
  },
  {
    path: 'add',
    component: SolicitacoesFormComponent
  },
  {
    path: 'edit/:id',
    component: SolicitacoesFormComponent
  },
  {
    path: 'view/:id',
    component: SolicitacoesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
