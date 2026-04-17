import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

import { PrimeIcons,MenuItem } from 'primeng/api';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
    TooltipModule,
    RippleModule,
    InputIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  @Input() nomeUsuario: string = 'AdministradorTest';
  @Output() toggleSidebar = new EventEmitter<void>();
  
  userMenuItems: MenuItem[] = [];

  ngOnInit() {
    this.initUserMenu();
  }

  initUserMenu() {
    this.userMenuItems = [
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        routerLink: '/perfil',
        command: () => this.onMenuItemClick('perfil')
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        routerLink: '/configuracoes',
        command: () => this.onMenuItemClick('configuracoes')
      },
      {
        separator: true
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => this.onLogout()
      }
    ];
  }

  // Método para obter as iniciais do nome
  getInitials(nome: string): string {
    if (!nome) return 'U';
    
    const partes = nome.trim().split(' ');
    if (partes.length === 1) {
      return partes[0].charAt(0).toUpperCase();
    }
    
    return (partes[0].charAt(0) + partes[partes.length - 1].charAt(0)).toUpperCase();
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onMenuItemClick(rota: string) {
    console.log('Navegando para:', rota);
  }

  onLogout() {
    console.log('Logout realizado');
    // Implementar lógica de logout
  }
}
