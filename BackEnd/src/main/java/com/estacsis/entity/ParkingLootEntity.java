package com.estacsis.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "parkingLoot")

public class ParkingLootEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idParkingLoot;
    @OneToMany(mappedBy = "Parkingloot", fetch = FetchType.EAGER)
    private List<ParkerEntity> parker;
<<<<<<< Updated upstream
    @Column(length = 45)
    private String name;
    @Column(unique = true,length = 150)
=======

    @ManyToOne
    @JoinColumn(name = "admin")
    private AdminEntity admin;

    @Column(length = 150)
>>>>>>> Stashed changes
    private Integer aCapacity;
    @Column(unique = true,length = 150)
    private Integer mCapacity;
    @Column(length = 45)
    private String nameParkingLoot;

    @Column(length = 20)
    private Double aTarifa;

    @Column(length = 20)
    private Double mTarifa;
    public ParkingLootEntity(Integer aCapacity, Integer mCapacity, String nameParkingLoot, Double aTarifa, Double mTarifa) {
        this.aCapacity = aCapacity;
        this.mCapacity = mCapacity;
        this.nameParkingLoot = nameParkingLoot;
        this.aTarifa = aTarifa;
        this.mTarifa = mTarifa;
    }

    public Long getId() {
        return idParkingLoot;
    }

    public Integer getaCapacity() {
        return aCapacity;
    }

    public void setaCapacity(Integer aCapacity) {
        this.aCapacity = aCapacity;
    }

    public Integer getmCapacity() {
        return mCapacity;
    }

    public void setmCapacity(Integer mCapacity) {
        this.mCapacity = mCapacity;
    }

    public String getNameParkingLoot() {
        return nameParkingLoot;
    }

    public void setNameParkingLoot(String nameParkingLoot) {
        this.nameParkingLoot = nameParkingLoot;
    }

    public Long getIdParkingLoot() {
        return idParkingLoot;
    }

    public void setIdParkingLoot(Long idParkingLoot) {
        this.idParkingLoot = idParkingLoot;
    }

    public List<ParkerEntity> getParker() {
        return parker;
    }

    public void setParker(List<ParkerEntity> parker) {
        this.parker = parker;
    }

    public AdminEntity getAdmin() {
        return admin;
    }

    public void setAdmin(AdminEntity admin) {
        this.admin = admin;
    }

    public Double getaTarifa() {
        return aTarifa;
    }

    public void setaTarifa(Double aTarifa) {
        this.aTarifa = aTarifa;
    }

    public Double getmTarifa() {
        return mTarifa;
    }

    public void setmTarifa(Double mTarifa) {
        this.mTarifa = mTarifa;
    }

    @Override
    public String toString() {
        return "ParkingLoot{" +
                "id=" + idParkingLoot +
                ", aCapacity=" + aCapacity +
                ", mCapacity=" + mCapacity +
                ", nameParkingLoot='" + nameParkingLoot + '\'' +
                '}';
    }
}
