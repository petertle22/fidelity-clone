import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualAssistantRoutingModule } from './virtual-assistant-routing.module';
import { VirtualAssistantComponent } from './virtual-assistant/virtual-assistant.component';


@NgModule({
  declarations: [
    VirtualAssistantComponent
  ],
  imports: [
    CommonModule,
    VirtualAssistantRoutingModule
  ]
})
export class VirtualAssistantModule { }
