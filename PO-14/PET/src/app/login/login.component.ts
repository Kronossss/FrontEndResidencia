import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  cadastro = false;
  erroMsg = '';
  isUsuarioLogado = false;
  emailLogado = '';

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
    // Verifica se o usuário está logado ao inicializar o componente
    this.isUsuarioLogado = this.authService.isAuthenticated();
    if (this.isUsuarioLogado) {
      this.emailLogado = this.authService.usuario.value.email;
    }
  }

  alterarParaCadastro(modo: boolean) {
    this.cadastro = modo;
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    if (!this.cadastro) {
      this.authService.login(email, senha).subscribe(
        (resData) => {
          this.erroMsg = '';
          this.isUsuarioLogado = true;
          this.emailLogado = email;
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.authService.cadastrarUsuario(email, senha).subscribe(
        (resData) => {
          this.erroMsg = '';
          this.isUsuarioLogado = true;
          this.emailLogado = email;
          this.router.navigate(['/']);
        },
        (error) => {
          if (error.error.error.message === 'EMAIL_EXISTS') {
            this.erroMsg = 'E-mail já cadastrado';
          } else {
            this.erroMsg = 'Erro desconhecido';
          }
        }
      );
    }
  }

  onLogout() {
    this.authService.logout();
    this.isUsuarioLogado = false;
    this.emailLogado = '';
  }
}
