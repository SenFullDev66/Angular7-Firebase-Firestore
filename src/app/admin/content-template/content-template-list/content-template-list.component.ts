import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ContentTemplateListDataSource } from './content-template-list-datasource';
import { Router } from '@angular/router';
import { ContentTemplateService } from '../../../services/content-template.service';

@Component({
  selector: 'app-content-template-list',
  templateUrl: './content-template-list.component.html',
  styleUrls: ['./content-template-list.component.scss']
})
export class ContentTemplateListComponent implements OnInit {
  @Input() themeId: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ContentTemplateListDataSource;

  constructor(
    private readonly router: Router,
    private readonly contentTemplateService: ContentTemplateService,
  ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['selector', 'title', 'updatedAt'];

  ngOnInit() {
    this.dataSource = new ContentTemplateListDataSource(this.themeId, this.paginator, this.sort, this.contentTemplateService);
  }

  editTemplate(templateId: string) {
    const url = `/_/admin/templates/${templateId}/edit`;
    this.router.navigateByUrl(url);
  }
}
