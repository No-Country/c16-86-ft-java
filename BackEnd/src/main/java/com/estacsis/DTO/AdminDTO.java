package com.estacsis.DTO;

import com.estacsis.entity.AdminEntity;

import java.util.Set;

public class AdminDTO {
    private Long idAdmin;
    private String name;
    private String lastName;
    private String email;
    private String passwordAdmin;
    private Set<ParkerDTO> parkers;
    private Set<ParkingLootDTO> parkingLoots;

    public AdminDTO(AdminEntity adminEntity) {
        this.idAdmin = adminEntity.getIdAdmin();
        this.name= adminEntity.getName();
        this.lastName = adminEntity.getLastName();
        this.email = adminEntity.getEmail();
        this.passwordAdmin = adminEntity.getPasswordAdmin();
    }

    public AdminDTO() {

    }

    // Getters y setters

    public Long getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(Long idAdmin) {
        this.idAdmin = idAdmin;
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
        this.passwordAdmin = passwordAdmin;
    }

    public Set<ParkerDTO> getParkers() {
        return parkers;
    }

    public void setParkers(Set<ParkerDTO> parkers) {
        this.parkers = parkers;
    }

    public Set<ParkingLootDTO> getParkingLoots() {
        return parkingLoots;
    }

    public void setParkingLoots(Set<ParkingLootDTO> parkingLoots) {
        this.parkingLoots = parkingLoots;
    }
}