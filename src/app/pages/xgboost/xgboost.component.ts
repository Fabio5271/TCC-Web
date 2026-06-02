import { Component, inject, OnInit } from '@angular/core';
import { TitleService } from '../../core/title.service';

@Component({
  selector: 'app-xgboost',
  imports: [],
  templateUrl: './xgboost.component.html',
  styleUrl: './xgboost.component.scss'
})
export class XgboostComponent implements OnInit {
  private readonly titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.setTitle('Análise Preditiva de Dados Climáticos X Doenças Respiratórias com XGBoost')
  }

}
