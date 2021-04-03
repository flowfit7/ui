import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component'
import { TrainingprogramComponent } from './trainingprogram/trainingprogram.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CustomerComponent } from './customer/customer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocumentsComponent } from './documents/documents.component';
import { ServicespackagesComponent } from './servicespackages/servicespackages.component';
import { VideosComponent } from './videos/videos.component';
import { MarkedComponent } from './marked/marked.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'homepage',
      component: HomepageComponent,
    },
    {
      path: 'messages',
      component: MessagesComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },      
    {
      path: 'trainingprogram',
      component: TrainingprogramComponent,
    },   
    {
      path: 'dietplan',
      component: DietplanComponent,
    }, 
    {
      path: 'customer',
      component: CustomerComponent,
    }, 
    {
      path: 'calendar',
      component: CalendarComponent,
    }, 
    {
      path: 'documents',
      component: DocumentsComponent,
    }, 
    {
      path: 'servicepackages',
      component: ServicespackagesComponent,
    }, 
    {
      path: 'videos',
      component: VideosComponent,
    }, 
    {
      path: 'marked',
      component: MarkedComponent,
    }, 
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
