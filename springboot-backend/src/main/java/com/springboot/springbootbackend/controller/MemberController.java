// Project Package
package com.springboot.springbootbackend.controller;

// Import(s)
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.springbootbackend.model.Member;
import com.springboot.springbootbackend.repository.MemberRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

// Annotation REST Controller
@RestController
@CrossOrigin
// Annotation Standard API URL endpoint
@RequestMapping("/api/v1")
public class MemberController {
    
    // Annotation Autowired - Inject Respository
    @Autowired
    private MemberRepository memberRepository;

    // Annotation - Get all members
    @CrossOrigin
    @GetMapping("/members")
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // Annotation - Create member rest api
    @CrossOrigin
    @PostMapping("/members")
    public Member createMember(@RequestBody Member member){
        return memberRepository.save(member);
    }

    // Annotation - Get member by ID rest api
    @CrossOrigin
    @GetMapping("/members/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Integer id) {
        Member member = memberRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id: " + id));
        return ResponseEntity.ok(member);
    }

    // Annotation - Update member rest api
    @CrossOrigin
    @PutMapping("/members/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable Integer id, @RequestBody Member memberDetails) {
        Member member = memberRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id: " + id));

        member.setSurname(memberDetails.getSurname());
        member.setFirstName(memberDetails.getFirstName());

        Member updatedMember = memberRepository.save(member);
        return ResponseEntity.ok(updatedMember);
    }

    // Annotation - Delete member rest api
    @CrossOrigin
    @DeleteMapping("/members/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMember(@PathVariable Integer id) {
        Member member = memberRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Member not exist with id: " + id));
        
        memberRepository.delete(member);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
} // End Class