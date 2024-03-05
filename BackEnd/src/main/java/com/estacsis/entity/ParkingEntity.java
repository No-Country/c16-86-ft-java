package com.estacsis.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "parking")
public class ParkingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idParking")
    private Long idParking;

    @Column(name = "state")
    private String state;

    @Column(name = "nomenclatureSection")
    private String nomenclatureSection;

    @Column(name = "vehicleType")
    private String vehicleType;

    // Constructor
    public ParkingEntity() {
    }

    // Constructor con parámetros
    public ParkingEntity(String state, String nomenclatureSection, String vehicleType) {
        this.state = state;
        this.nomenclatureSection = nomenclatureSection;
        this.vehicleType = vehicleType;
    }

    // Getters y Setters
    public Long getIdParking() {
        return idParking;
    }

    public void setIdParking(Long idParking) {
        this.idParking = idParking;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNomenclatureSection() {
        return nomenclatureSection;
    }

    public void setNomenclatureSection(String nomenclatureSection) {
        this.nomenclatureSection = nomenclatureSection;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    // toString()
    @Override
    public String toString() {
        return "ParkingEntity{" +
                "idParking=" + idParking +
                ", state='" + state + '\'' +
                ", nomenclatureSection='" + nomenclatureSection + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                '}';
    }
}

