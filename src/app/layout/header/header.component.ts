import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';
import { SidebarService } from '../../core/sidebar.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private readonly titleService = inject(TitleService)
  private readonly sidebarService = inject(SidebarService)
  protected isSidebarCollapsed = toSignal(this.sidebarService.isCollapsed$, { initialValue: false })
  protected title = ''

  ngOnInit(): void {
    this.titleService.title$.subscribe(t => { this.title = t })
  }

  toggleSidebar() {
    this.sidebarService.toggle()
  }
}
