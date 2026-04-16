import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-firewall',
  standalone: true,
  imports: [
    MainLayoutComponent,
    CommonModule,
    FormsModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    DropdownModule,
    TextareaModule,
    ToastModule,
    RippleModule,
    TooltipModule
  ],
  providers: [MessageService],
  templateUrl: './firewall.component.html',
  styleUrl: './firewall.component.scss'
})
export class FirewallComponent implements OnInit {
  // Propriedades
  arquivosEncontrados: any[] = [];
  arquivoSelecionado: string = '';
  textoDoArquivo: string = '';
  sidebarVisible: boolean = false;
  
  // Menu items
  menuItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.initMenu();
    this.initUserMenu();
    this.carregarArquivos();
  }

  initMenu() {
    this.menuItems = [
      {
        label: 'Firewall',
        icon: 'pi pi-bricks',
        expanded: true,
        items: [
          { 
            label: 'Sites Liberados', 
            icon: 'pi pi-globe',
            command: () => this.onMenuClick('sites-liberados')
          },
          { 
            label: 'Ping', 
            icon: 'pi pi-chart-line',
            command: () => this.onMenuClick('ping')
          },
          { 
            label: 'Monitorar Squid', 
            icon: 'pi pi-chart-bar',
            command: () => this.onMenuClick('monitorar')
          },
          { 
            label: 'Ipsec', 
            icon: 'pi pi-shield',
            command: () => this.onMenuClick('ipsec')
          }
        ]
      },
      {
        label: 'Usuários',
        icon: 'pi pi-users',
        command: () => this.onMenuClick('usuarios')
      },
      {
        label: 'Ajuda',
        icon: 'pi pi-question-circle',
        command: () => this.onMenuClick('ajuda')
      }
    ];
  }

  initUserMenu() {
    this.userMenuItems = [
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        command: () => this.onMenuClick('perfil')
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => this.onMenuClick('sair')
      }
    ];
  }

  onMenuClick(rota: string) {
    console.log('Navegando para:', rota);
    // Implementar navegação ou ações específicas
    this.showInfo(`Navegando para: ${rota}`);
  }

  carregarArquivos() {
    // Simular carregamento de arquivos - substituir pela chamada real da API
    this.arquivosEncontrados = [
      { label: 'sites_liberados.txt', value: 'sites_liberados.txt' },
      { label: 'sites_bloqueados.txt', value: 'sites_bloqueados.txt' },
      { label: 'whitelist.txt', value: 'whitelist.txt' },
      { label: 'blacklist.txt', value: 'blacklist.txt' }
    ];
  }

  buscarArquivo() {
    if (this.arquivoSelecionado) {
      // Simular busca - substituir pela chamada real da API
      this.textoDoArquivo = `# Conteúdo do arquivo ${this.arquivoSelecionado}
# Lista de sites liberados
www.google.com
www.github.com
stackoverflow.com
www.youtube.com
www.facebook.com

# Adicione mais sites abaixo:
`;
      this.showSuccess(`Arquivo ${this.arquivoSelecionado} carregado com sucesso!`);
    } else {
      this.showError('Por favor, selecione um arquivo primeiro!');
    }
  }

  salvarArquivo() {
    if (this.arquivoSelecionado && this.textoDoArquivo) {
      // Simular salvamento - substituir pela chamada real da API
      console.log('Salvando arquivo:', this.arquivoSelecionado);
      console.log('Conteúdo:', this.textoDoArquivo);
      this.showSuccess('Arquivo salvo com sucesso!');
    } else {
      this.showError('Não é possível salvar: arquivo ou conteúdo vazio!');
    }
  }

  reconfigurar() {
    // Simular reconfiguração - substituir pela chamada real da API
    console.log('Reconfigurando firewall...');
    this.showSuccess('Firewall reconfigurado com sucesso!');
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: message,
      life: 5000
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro!',
      detail: message,
      life: 5000
    });
  }

  showInfo(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
      life: 3000
    });
  }
}
