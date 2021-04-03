import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { TrainingprogramComponent } from './trainingprogram/trainingprogram.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CustomerComponent } from './customer/customer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocumentsComponent } from './documents/documents.component';
import { ServicespackagesComponent } from './servicespackages/servicespackages.component';
import { VideosComponent } from './videos/videos.component';
import { MarkedComponent } from './marked/marked.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
   ],
  declarations: [
    PagesComponent,
    HomepageComponent,
    MessagesComponent,
    SettingsComponent,
    TrainingprogramComponent,
    DietplanComponent,
    CustomerComponent,
    CalendarComponent,
    DocumentsComponent,
    ServicespackagesComponent,
    VideosComponent,
    MarkedComponent,
  ],
})
export class PagesModule {
}
