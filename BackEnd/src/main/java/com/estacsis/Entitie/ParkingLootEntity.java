package com.estacsis.Entitie;
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
    @Column(length = 45)
    private String name;
    @Column(unique = true,length = 150)
    private Integer aCapacity;
    @Column(unique = true,length = 150)
    private Integer mCapacity;
    @Column(length = 45)
    private String nameParkingLoot;

    public ParkingLootEntity(String name, Integer aCapacity, Integer mCapacity, String nameParkingLoot) {
        this.name = name;
        this.aCapacity = aCapacity;
        this.mCapacity = mCapacity;
        this.nameParkingLoot = nameParkingLoot;
    }

    public Long getId() {
        return idParkingLoot;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return "ParkingLoot{" +
                "id=" + idParkingLoot +
                ", name='" + name + '\'' +
                ", aCapacity=" + aCapacity +
                ", mCapacity=" + mCapacity +
                ", nameParkingLoot='" + nameParkingLoot + '\'' +
                '}';
    }
}
