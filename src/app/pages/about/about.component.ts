import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private readonly titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.setTitle('Sistema de Análise de Ocorrência de Doenças Respiratórias no Distrito Federal Baseado em Dados Governamentais')
  }

}
