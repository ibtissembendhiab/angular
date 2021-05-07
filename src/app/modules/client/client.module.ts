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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ContactsComponent } from './contacts/contacts.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { SettingsComponent } from './settings/settings.component';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HRMSComponent } from './hrms/hrms.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';
import { SearchComponent } from './search/search.component';
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
import { ArchiveComponent } from './archive/archive.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';
import { AuthGuard } from 'src/app/core/services/auth.guard';



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
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    CKEditorModule
  ],
  declarations: [
    DashboardAdminComponent,
    HeaderComponent,
    LeftmenuComponent,
    TablesComponent,
    ContactsComponent,
    FilemanagerComponent,
    SettingsComponent,
    HRMSComponent,
    HrUsersComponent,
    HrDashboardComponent,
    HrDepartmentsComponent,

    SearchComponent,
 
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
    ArchiveComponent,
  ],
  providers: [BsDatepickerModule, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
]
})

export class ClientModule { }