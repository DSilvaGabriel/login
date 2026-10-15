import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing-module';
import { Login } from './login/login';

@NgModule({
  declarations: [Login],
  imports: [CommonModule, PageRoutingModule],
})
export class PageModule {}
