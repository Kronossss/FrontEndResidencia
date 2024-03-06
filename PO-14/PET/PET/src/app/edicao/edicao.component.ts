import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtendimentoService } from '../atendimento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent {
  cadastroForm!: FormGroup;
  tiposAtendimento :string[] = ['Consulta', 'Banho', 'Tosa', 'Vacina', 'Cirurgia'];
  ident :string[] = ['Macho', 'Fêmea'];
  atendimentoParaEdicao : any;
  id: string | null = null;

  constructor(private fb: FormBuilder, private atendimentoService: AtendimentoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.id = this.route.snapshot.paramMap.get('id');

    this.atendimentoService.detalhar(this.id!).subscribe(atendimento => {
      this.atendimentoParaEdicao = atendimento;
      this.cadastroForm.patchValue(this.atendimentoParaEdicao);
    });    
  }

  private criarFormulario(): void {
    this.cadastroForm = this.fb.group({
      nomeCliente: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomePet: ['', Validators.required],
      especie: ['', Validators.required],
      idade : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      ident : [this.ident[0]],
      dataAtendimento: ['', Validators.required],
      tipoAtendimento: [this.tiposAtendimento[0], Validators.required],
      valor: [''],
      observacoes: ['']
    });
  }

  atualizarAtendimento(): void {
    if (this.cadastroForm.valid) {
      var novoAtendimento = this.cadastroForm.value;
      novoAtendimento.dataAtendimento = new Date(novoAtendimento.dataAtendimento).toISOString();

      this.atendimentoService.atualizar(this.id!, novoAtendimento).subscribe(() => {
        alert('Atendimento atualizado com sucesso!');
      });
    }
  }
}
