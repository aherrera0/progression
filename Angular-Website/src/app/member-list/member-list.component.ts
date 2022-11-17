/* Created with cmd: ng g c member-list */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  /* Define Member array property */
  members: Member[];

  /* Inject Member Service*/
  constructor(private memberService: MemberService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  private getMembers() {
    this.memberService.getMemberList().subscribe(data=> {
      this.members = data;
    });
  }

  memberDetails(id: number) {
    this.router.navigate(['member-details',id]);
  }

  updateMember(id: number) {
    this.router.navigate(['update-member',id]);
  }

  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe(data=> {
      console.log(data)
      this.getMembers();
    })
  }
}