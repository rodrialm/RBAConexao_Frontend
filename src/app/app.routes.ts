import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirewallComponent } from './pages/firewall/firewall.component';
import { MonitoramentoComponent } from './pages/monitoramento/monitoramento.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'configuracoes', component: ConfiguracoesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'firewall', component: FirewallComponent},
    { path: 'monitoramento', component: MonitoramentoComponent},
    { path: '**', redirectTo: '/login' }
];
