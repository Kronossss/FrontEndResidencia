import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ArtigoService } from './services/artigo.service';
import { HttpClientModule } from '@angular/common/http';
import { ClimaService } from './services/clima.service';
import { ServicoComponent } from './servico/servico.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    ServicosComponent,
    DestaqueComponent,
    ResultadosComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtigoService, ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
