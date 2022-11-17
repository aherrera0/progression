import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // Define URL Endpoint
  private baseURL = "http://localhost:8080/api/v1/members";
  
  // Inject httpClient into constructor
  constructor(private httpClient: HttpClient) {
  }

  // Get member list
  getMemberList(): Observable<Member[]>{
    return this.httpClient.get<Member[]>(`${this.baseURL}`);
  }

  // Create new member
  createMember(member: Member): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,member)
  }

  getMemberById(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${this.baseURL}/${id}`);
  }

  updateMember(id: number, member: Member): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, member);
  }

  deleteMember(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}