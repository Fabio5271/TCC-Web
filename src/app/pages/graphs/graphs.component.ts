import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-graphs',
  imports: [],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss'
})
export class GraphsComponent implements OnInit {
  private readonly titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.setTitle('Gráficos Gerados para a Visualização de Dados')
  }

}
