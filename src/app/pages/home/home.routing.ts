import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MarketComponent } from './market/market.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShortsComponent } from './shorts/shorts.component';
import { PantsComponent } from './pants/pants.component';


const routes: Routes =[
  { path: 'home',  component: HomeComponent,
      children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'table-list',     component: TableListComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent },
      { path: 'market',         component: MarketComponent },
      { path: 'footwear',       component: FooterComponent },
      { path: 'shirts',         component: ShirtsComponent },
      { path: 'shorts',         component: ShortsComponent },
      { path: 'pants',          component: PantsComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

