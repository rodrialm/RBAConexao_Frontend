import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importar os componentes compartilhados
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
   standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
  template: `
    <app-navbar (toggleSidebar)="onToggleSidebar()"></app-navbar>
    <app-sidebar [(visible)]="sidebarVisible"></app-sidebar>
    <div class="layout-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .layout-content {
      margin-left: 0;
      padding-top: 70px;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    
    @media (min-width: 769px) {
      .layout-content {
        margin-left: 0;
        transition: margin-left 0.3s ease;
      }
    }
  `]
})
export class MainLayoutComponent {
    sidebarVisible: boolean = false;

  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
