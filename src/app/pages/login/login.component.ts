import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [   CommonModule,
        InputTextModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        ToastModule
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
usuario: string = '';
    senha: string = '';
    rememberMe: boolean = false;
    isLoading: boolean = false;
    submitted: boolean = false;
    logoLoaded: boolean = true;

    constructor(
        private messageService: MessageService,
        private router: Router,
        private http: HttpClient
    ) {}

    onSubmit() {
        this.submitted = true;
        
        if (!this.usuario || !this.senha) {
            this.messageService.add({
                severity: 'error',
                summary: 'Campos obrigatórios',
                detail: 'Por favor, preencha todos os campos!',
                life: 3000
            });
            return;
        }

        this.isLoading = true;

        // Simulação de login - Substitua pela sua API
        setTimeout(() => {
            this.isLoading = false;
            
            if (this.usuario === 'admin' && this.senha === '123456') {
                if (this.rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }
                
                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Login realizado com sucesso!',
                    life: 2000
                });
                
                setTimeout(() => {
                    this.router.navigate(['/dashboard']);
                }, 1500);
            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro de autenticação',
                    detail: 'Usuário ou senha inválidos!',
                    life: 5000
                });
            }
        }, 1500);
    }
}