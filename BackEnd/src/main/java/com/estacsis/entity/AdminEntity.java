package com.estacsis.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "admin")
public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAdmin;
    private String name;
    private String lastName;
    private String email;
    private String passwordAdmin;

    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ParkerEntity> parkers = new HashSet<>();

    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<ParkingLootEntity> parkingLoots = new HashSet<>();

    public AdminEntity(){}

    public AdminEntity(String name, String lastName, String email, String passwordAdmin) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.passwordAdmin = passwordAdmin;
    }

    // Getters and setters

    @Override
    public String toString() {
        return "AdminEntity{" +
                "idAdmin=" + idAdmin +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", passwordAdmin='" + passwordAdmin + '\'' +
                '}';
    }

    public Long getIdAdmin() {
        return idAdmin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordAdmin() {
        return passwordAdmin;
    }

    public void setPasswordAdmin(String passwordAdmin) {
        this.passwordAdmin= passwordAdmin;
    }

    public Set<ParkerEntity> getParkers() {
        return parkers;
    }

    public void setParkers(Set<ParkerEntity> parkers) {
        this.parkers = parkers;
    }

    public Set<ParkingLootEntity> getParkingLoots() {
        return parkingLoots;
    }

    public void setParkingLoots(Set<ParkingLootEntity> parkingLoots) {
        this.parkingLoots = parkingLoots;
    }
<<<<<<< Updated upstream
=======

    public void setIdAdmin(Long idAdmin) {
        this.idAdmin = idAdmin;
    }
>>>>>>> Stashed changes
}