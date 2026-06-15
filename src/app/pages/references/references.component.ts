import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  private readonly titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.setTitle('Referências Bibliográficas')
  }
}
