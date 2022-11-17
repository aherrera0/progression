import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMemberComponent } from './create-member/create-member.component';
import { FormsModule } from '@angular/forms';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }