/* Created with cmd: ng g c create-member */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  // Create new member object instance
  member: Member = new Member();
  
  constructor(private memberService: MemberService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveMember() {
    this.memberService.createMember(this.member).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  goToMemberList() {
    this.router.navigate(['/members']);
  }

  onSubmit() {
    console.log(this.member);
    this.saveMember();
  }

}
