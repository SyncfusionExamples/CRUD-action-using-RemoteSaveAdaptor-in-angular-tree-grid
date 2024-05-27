import { Component, ViewChild } from '@angular/core';
import { TreeGridComponent, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';
import { HttpClient } from '@angular/common/http';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public pagesettings?: object;
  public value: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadGridData();
    
    this.pagesettings = { pageSize: 14 };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Row'};
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

  }
  
  loadGridData(): void {
    const ajax = new Ajax({
      url: '/Home/GetSelfData',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        sorted: [],
        where: [],
        search: [],
        skip: 0,
        take: 10,
        requiresCounts: true
      })
    });
    ajax.send();
    ajax.onSuccess = (data: any) => {
      this.value = data;
     
      this.data = new DataManager({
        json: this.value,

        updateUrl: '/Home/Update',
        insertUrl: '/Home/Insert',
        removeUrl: '/Home/Remove',
        adaptor: new RemoteSaveAdaptor()
      });
    };
    ajax.onFailure = (error: any) => {
      console.error('Error:', error);
    };

  }
}


