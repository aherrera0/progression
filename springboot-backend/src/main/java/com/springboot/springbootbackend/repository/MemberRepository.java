// Project Package
package com.springboot.springbootbackend.repository;

// Import(s)
import org.springframework.data.jpa.repository.JpaRepository;
// Expose method from model
import com.springboot.springbootbackend.model.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository <Member, Integer>{

    
    
} // End Class