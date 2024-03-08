package com.estacsis.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "parking")
public class ParkingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idParking")
    private Long idParking;

    @ManyToOne
    @JoinColumn(name = "idParkingLoot")
    private ParkingLootEntity parkingLoot;

    @Column(name = "state")
    private Boolean state=true;

    @Column(name = "nomenclatureSection")
    private String nomenclatureSection;

    @Column(name = "vehicleType")
    private String vehicleType;

    // Constructor
    public ParkingEntity() {
    }

    // Constructor con parámetros
    public ParkingEntity(Boolean state, String nomenclatureSection, String vehicleType) {
        this.state = true;
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

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
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

    public ParkingLootEntity getParkingLoot() {
        return parkingLoot;
    }

    public void setParkingLoot(ParkingLootEntity parkingLoot) {
        this.parkingLoot = parkingLoot;
    }

    // toString()

    @Override
    public String toString() {
        return "ParkingEntity{" +
                "idParking=" + idParking +
                ", parkingLoot=" + parkingLoot +
                ", state=" + state +
                ", nomenclatureSection='" + nomenclatureSection + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                '}';
    }
}

