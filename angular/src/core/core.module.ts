import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormErrorsComponent } from "./form-errors/form-errors.component";
import { FormGroupComponent } from "./form-group/form-group.component";
import { PopoverComponent } from "./popover/popover.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { BoxComponent } from "./box/box.component";

import { CommonService } from './providers/common.service'
import { SideBarService } from './providers/sidebar.service'
import { SidePanelService } from './providers/sidepanel.service'
import { NotificationsService } from './providers/notifications.service'

import { DebounceInputDirective } from './directives/debounceInput.directive'
import { SpinningIconDirective } from './directives/spinningIcon.directive'
import { ClickStopPropagation } from './directives/stopPropagation.directive'
import { ValidatorsDirective } from './directives/validators.directive'
import { MatchPassword } from './validators/matchPassword.validator'

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FormErrorsComponent,
    FormGroupComponent,
    BoxComponent,
    PopoverComponent,
    SidePanelComponent,
    // SourceVectorComponent,
    NotificationsComponent,
    DebounceInputDirective,
    ClickStopPropagation,
    SpinningIconDirective,
    ValidatorsDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FormErrorsComponent,
    FormGroupComponent,
    PopoverComponent,
    SidePanelComponent,
    NotificationsComponent,
    BoxComponent,
    NgbModule,
    FormsModule,
    SpinningIconDirective,
    ValidatorsDirective,
    ReactiveFormsModule,
  ]
})
export class CoreModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CommonService,
        SideBarService,
        NotificationsService,
        SidePanelService, 
      ] 
    };
  }

}
