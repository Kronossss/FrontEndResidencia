import { Component } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent {
  id: string | null = null;
  atendimento: any;

  constructor(private atendimentoService: AtendimentoService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.atendimentoService.detalhar(this.id!).subscribe(atendimento => {
      this.atendimento = atendimento;
    });
  }

}
