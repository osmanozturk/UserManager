import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { UserListComponent } from './user-list/user-list.component';
import { TokenComponent } from './token/token.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

export const routes: Routes = [
  { path: '', redirectTo:'/authentication/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'manage-user', component: ManageUserComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
