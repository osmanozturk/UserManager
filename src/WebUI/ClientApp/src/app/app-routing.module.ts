import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { UserListComponent } from './user-list/user-list.component';
import { TokenComponent } from './token/token.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo:'/authentication/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
