// Project Package
package com.springboot.springbootbackend.model;

// Import(s)
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// Entity Annotation
@Entity
// Table Annotation - provides table name
@Table(name="members")
public class Member {

    // Define Varible(s)
    @Id
    // Sequence database-managed
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="id")
    private Integer id;
    @Column(name="surname")
    private String surname;
    @Column(name="first_name")
    private String firstname;

    // Default Constuctor
    public Member() {
    }

    // Public Constructor
    public Member(Integer id, String surname, String firstname) {
        this.id = id;
        this.surname = surname;
        this.firstname = firstname;
    }
    // Define Getters
    public Integer getId() {
        return id;
    }
    
    public String getSurname() {
        return surname;
    }
    
    public String getFirstName() {
        return firstname;
    }

    // Define Setters
    public void setId(Integer id) {
        this.id = id;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }
    
} // End Class