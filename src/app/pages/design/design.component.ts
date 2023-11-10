import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import 'devexpress-reporting/dx-reportdesigner';
import { RelatorioService } from '../../services/relatorio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  host = environment.devexpress;
  form: FormGroup;
  reportUrl: string;
  reportItems: any[];
  showDesigner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private relatorioService: RelatorioService
  ) {
    this.form = this.fb.group({
      report: ['']
    });
  }

  ngOnInit(): void {
    this.relatorioService.getRelatorios().subscribe(items => {
      this.reportItems = items;
    });
  }

  abrirDesigner() {
    if (this.form.valid) {
      this.reportUrl = this.form.value.report;
      this.showDesigner = true;
    }
  }

  selecionarReport(item: any): void {
    this.reportUrl = item;
    this.form.controls['report'].setValue(item.name);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
