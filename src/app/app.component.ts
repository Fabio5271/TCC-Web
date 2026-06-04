import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarService } from './core/sidebar.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly sidebarService = inject(SidebarService)
  protected isSidebarCollapsed = toSignal(this.sidebarService.isCollapsed$, { initialValue: false })

  toggleSidebar() {
    this.sidebarService.toggle()
  }
}
