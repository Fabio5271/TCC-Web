import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private readonly titleService = inject(TitleService)
  protected title = ''

  ngOnInit(): void {
    this.titleService.title$.subscribe(t => { this.title = t })
  }
}
