import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

// Redirects url to members as baseurl for empty path
const routes: Routes = [
  {path: 'members',component: MemberListComponent},
  {path: 'create-member', component: CreateMemberComponent},
  {path: 'update-member/:id', component: UpdateMemberComponent},
  {path: 'member-details/:id', component: MemberDetailsComponent},
  {path: '',redirectTo: 'members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
