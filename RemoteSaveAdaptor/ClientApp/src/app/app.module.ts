
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    GridAllModule, TreeGridAllModule,
    RouterModule.forRoot([
    
    ])
  ],
  providers: [EditService, SortService, ToolbarService, RowDDService, FilterService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
