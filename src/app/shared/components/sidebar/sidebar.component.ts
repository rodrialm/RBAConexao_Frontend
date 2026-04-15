import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule, 
    RouterModule, 
    MenuModule, 
    SidebarModule,
    PanelMenuModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  
  menuItems: MenuItem[] = [
    {
      label: 'Firewall',
      icon: 'pi pi-bricks',
      expanded: true,
      items: [
        {
          label: 'Sites Liberados',
          icon: 'pi pi-globe',
          routerLink: '/firewall',
          routerLinkActiveOptions: { exact: true }
        },
        {
          label: 'Ping',
          icon: 'pi pi-chart-line',
          routerLink: '/firewall/ping'
        },
        {
          label: 'Monitorar Squid',
          icon: 'pi pi-chart-bar',
          routerLink: '/firewall/monitorar-squid'
        },
        {
          label: 'Ipsec',
          icon: 'pi pi-shield',
          routerLink: '/firewall/ipsec'
        }
      ]
    },
    {
      label: 'Usuários',
      icon: 'pi pi-users',
      routerLink: '/usuarios'
    },
    {
      label: 'Ajuda',
      icon: 'pi pi-question-circle',
      routerLink: '/ajuda'
    }
  ];

  onCloseSidebar() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
