import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementComponent } from './form-element/form-element.component';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ArchiveComponent} from '../client/archive/archive.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';

import { HRMSComponent } from './hrms/hrms.component';
import { SearchComponent } from './search/search.component';
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
    data: { title: 'Home' }
  },
  {
    path: 'hr-dashboard',
    component: HrDashboardComponent,
    data: { title: 'Home' }
  },
  {
    path: 'hr-users',
    component: HrUsersComponent,
    data: { title: 'Users' }
  },
  {
    path: 'hr-departments',
    component: HrDepartmentsComponent,
    data: { title: 'Groupes' }
  },
 
  {
    path: 'search',
    component: SearchComponent,
    data: { title: ' Search' }
  },
  
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts' }
  },
  
  {
    path: 'filemanager',
    component: FilemanagerComponent,
    data: { title: 'Filemanager' }
  },
  {
    path: 'icon-fontawesome',
    component: IconFontawesomeComponent,
    data: { title: 'Icon Fontawesome' }
  },
  {
    path: 'icon-feather',
    component: IconFeatherComponent,
    data: { title: 'Icon Feather' }
  },
  {
    path: 'icon-lines',
    component: IconLinesComponent,
    data: { title: 'Icon Lines' }
  },
  {
    path: 'icon-flags',
    component: IconFlagsComponent,
    data: { title: ' Icon Flags' }
  },
  {
    path: 'icon-payments',
    component: IconPaymentsComponent,
    data: { title: ' Icon Payments' }
  },
  {
    path: 'table',
    component: TablesComponent,
    data: { title: 'Tables' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: ' Gallery' }
  },
  {
    path: 'formelement',
    component: FormElementComponent,
    data: { title: ' Forms' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: ' Profile' }
  },
  {
    path: 'archive',
    component: ArchiveComponent,
    data: { title: ' archive' }
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