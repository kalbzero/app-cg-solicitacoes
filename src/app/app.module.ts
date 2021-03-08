import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { SolicitacoesFormComponent } from './components/solicitacoes-form/solicitacoes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitacoesComponent,
    SolicitacoesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
