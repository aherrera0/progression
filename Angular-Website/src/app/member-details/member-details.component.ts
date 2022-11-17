/* Created with cmd: ng g c member-details */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  id: number
  member: Member
  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.member = new Member();
    this.memberService.getMemberById(this.id).subscribe(data => {
      this.member = data;
    });
  }

}
