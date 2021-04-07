import { RegisterComponent } from './../auth/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormElementComponent } from './form-element/form-element.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { ContactsComponent } from './contacts/contacts.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { SettingsComponent } from './settings/settings.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { HRMSComponent } from './hrms/hrms.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';
import { HrActivitiesComponent } from './hrms/hr-activities/hr-activities.component';
import { SearchComponent } from './search/search.component';
import { ProjectComponent } from './project/project.component';
import { PrDashboardComponent } from './project/pr-dashboard/pr-dashboard.component';
import { PrProjectlistComponent } from './project/pr-projectlist/pr-projectlist.component';
import { PrTaskboardComponent } from './project/pr-taskboard/pr-taskboard.component';
import { PrTicketdetailsComponent } from './project/pr-ticketdetails/pr-ticketdetails.component';
import { PrTicketlistComponent } from './project/pr-ticketlist/pr-ticketlist.component';
import { PrClientsComponent } from './project/pr-clients/pr-clients.component';
import { PrTodolistComponent } from './project/pr-todolist/pr-todolist.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UIELEMENTSComponent } from './ui-elements/ui-elements.component';
import { IconsComponent } from './UI-ELEMENTS/icons/icons.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountToModule } from 'angular-count-to';
import { FooterComponent } from './footer/footer.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    ToastrModule.forRoot({
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    FullCalendarModule,
    CKEditorModule
  ],
  declarations: [
    ClientRoutingModule.components,
    HeaderComponent,
    LeftmenuComponent,
    FormElementComponent,
    TablesComponent,
    //ContactsComponent,
    FilemanagerComponent,
    SettingsComponent,
    CkeditorComponent,
    HRMSComponent,
    HrUsersComponent,
    HrDashboardComponent,
    HrDepartmentsComponent,
    HrActivitiesComponent,
    SearchComponent,
    ProjectComponent,
    PrDashboardComponent,
    PrProjectlistComponent,
    PrTaskboardComponent,
    PrTicketdetailsComponent,

    PrTicketlistComponent,
    PrClientsComponent,
    PrTodolistComponent,
    UIELEMENTSComponent,
    IconsComponent,
    IconFontawesomeComponent,
    IconFeatherComponent,
    IconLinesComponent,
    IconFlagsComponent,
    IconPaymentsComponent,
    GalleryComponent,
    ProfileComponent,
    FooterComponent,
  ],
  providers: [BsDatepickerModule]
})

export class ClientModule { }