import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { NewComponent } from './common/new/new.component';
import { AdminComponent } from './page/admin/admin.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cat01',
    component: Cat01Component,
  },
  {
    path: 'cat02',
    component: Cat02Component,
  },
  {
    path: 'cat03',
    component: Cat03Component,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'product/edit/:id',
    component: DataEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
