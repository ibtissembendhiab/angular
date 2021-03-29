import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementComponent } from './form-element/form-element.component';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';
import { HrActivitiesComponent } from './hrms/hr-activities/hr-activities.component';
import { HRMSComponent } from './hrms/hrms.component';
import { SearchComponent } from './search/search.component';
import { PrDashboardComponent } from './project/pr-dashboard/pr-dashboard.component';
import { PrProjectlistComponent } from './project/pr-projectlist/pr-projectlist.component';
import { PrTaskboardComponent } from './project/pr-taskboard/pr-taskboard.component';
import { PrTicketlistComponent } from './project/pr-ticketlist/pr-ticketlist.component';
import { PrTicketdetailsComponent } from './project/pr-ticketdetails/pr-ticketdetails.component';
import { PrClientsComponent } from './project/pr-clients/pr-clients.component';
import { PrTodolistComponent } from './project/pr-todolist/pr-todolist.component';
import { ProjectComponent } from './project/project.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';


const routes: Routes = [
  {
    path: 'hr',
    component: HRMSComponent,
    data: { title: ':: Epic :: Home' }
  },
  {
    path: 'hr-dashboard',
    component: HrDashboardComponent,
    data: { title: ':: Epic :: Home' }
  },
  {
    path: 'hr-users',
    component: HrUsersComponent,
    data: { title: ':: Epic :: HR Users' }
  },
  {
    path: 'hr-departments',
    component: HrDepartmentsComponent,
    data: { title: ':: Epic :: HR Departments' }
  },
  {
    path: 'hr-activities',
    component: HrActivitiesComponent,
    data: { title: ':: Epic :: HR Activities' }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { title: ':: Epic :: Search' }
  },
  
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: ':: Epic :: Contacts' }
  },
  
  {
    path: 'filemanager',
    component: FilemanagerComponent,
    data: { title: ':: Epic ::  Filemanager' }
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { title: ':: Epic :: Project' }
  },
  {
    path: 'project-deashboard',
    component: PrDashboardComponent,
    data: { title: ':: Epic :: Project Dashboard' }
  },
  {
    path: 'project-list',
    component: PrProjectlistComponent,
    data: { title: ':: Epic :: Project List' }
  },
  {
    path: 'project-taskboard',
    component: PrTaskboardComponent,
    data: { title: ':: Epic :: Project Taskboard' }
  },
  {
    path: 'project-ticketlist',
    component: PrTicketlistComponent,
    data: { title: ':: Epic :: Project Ticketlist' }
  },
  {
    path: 'project-ticketdetails',
    component: PrTicketdetailsComponent,
    data: { title: ':: Epic :: Project Ticketdetails' }
  },
  {
    path: 'project-clients',
    component: PrClientsComponent,
    data: { title: ':: Epic :: Project Clients' }
  },
  {
    path: 'project-todo-list',
    component: PrTodolistComponent,
    data: { title: ':: Epic :: Project Todolist' }
  },
 
  {
    path: 'icon-fontawesome',
    component: IconFontawesomeComponent,
    data: { title: ':: Epic :: Icon Fontawesome' }
  },
  {
    path: 'icon-feather',
    component: IconFeatherComponent,
    data: { title: ':: Epic :: Icon Feather' }
  },
  {
    path: 'icon-lines',
    component: IconLinesComponent,
    data: { title: ':: Epic :: Icon Lines' }
  },
  {
    path: 'icon-flags',
    component: IconFlagsComponent,
    data: { title: ':: Epic :: Icon Flags' }
  },
  {
    path: 'icon-payments',
    component: IconPaymentsComponent,
    data: { title: ':: Epic :: Icon Payments' }
  },
  {
    path: 'table',
    component: TablesComponent,
    data: { title: ':: Epic :: Tables' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: ':: Epic :: Gallery' }
  },
  {
    path: 'formelement',
    component: FormElementComponent,
    data: { title: ':: Epic :: Forms' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: ':: Epic :: Settings' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: ':: Epic :: Profile' }
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
  ];

}