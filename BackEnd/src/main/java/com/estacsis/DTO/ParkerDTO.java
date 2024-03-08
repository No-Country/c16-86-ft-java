package com.estacsis.DTO;

public class ParkerDTO {
    private Long idParker;
    private String name;
    private String lastName;
    private String dni;
    private String userParker;
    private String passwordParker;
    private Long parkingLootId; // Id de ParkingLoot
    private Long adminId; // Id de Admin

    // Getters y setters

    public Long getIdParker() {
        return idParker;
    }

    public void setIdParker(Long idParker) {
        this.idParker = idParker;
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

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getUserParker() {
        return userParker;
    }

    public void setUserParker(String userParker) {
        this.userParker = userParker;
    }

    public String getPasswordParker() {
        return passwordParker;
    }

    public void setPasswordParker(String passwordParker) {
        this.passwordParker = passwordParker;
    }

    public Long getParkingLootId() {
        return parkingLootId;
    }

    public void setParkingLootId(Long parkingLootId) {
        this.parkingLootId = parkingLootId;
    }

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }
}

