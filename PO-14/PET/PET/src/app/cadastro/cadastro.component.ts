import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  tiposAtendimento :string[] = ['Consulta', 'Banho', 'Tosa', 'Vacina', 'Cirurgia'];
  ident :string[] = ['Macho', 'Fêmea'];

  constructor(private fb: FormBuilder, private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.criarFormulario();
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

  cadastrarAtendimento(): void {
    if (this.cadastroForm.valid) {
      var novoAtendimento = this.cadastroForm.value;
      novoAtendimento.dataAtendimento = new Date(novoAtendimento.dataAtendimento).toISOString();

      this.atendimentoService.cadastrar(novoAtendimento)
        .subscribe(response => {
          alert('Atendimento cadastrado com sucesso!');
          console.log('Atendimento cadastrado com sucesso:', response);
          this.cadastroForm.reset();
        },
        error => {
          alert('Erro ao cadastrar atendimento!');
          console.error('Erro ao cadastrar atendimento:', error);
        });
    } 
  }
}
