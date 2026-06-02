import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-external-links',
  imports: [],
  templateUrl: './external-links.component.html',
  styleUrl: './external-links.component.scss'
})
export class ExternalLinksComponent implements OnInit {
  private readonly titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.setTitle('Recursos e Referências Externas')
  }
}
