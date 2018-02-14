import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent,
    LoaderComponent,
    ItemComponent
  ],
  exports: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent, 
    LoaderComponent,
    ItemComponent
  ]
})
export class ComponentsModule { }
