package com.estacsis.Entitie;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "parkingLoot")

public class ParkingLootEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idParkingLoot;
    @NotBlank
    @Column(length = 45)
    private String name;
    @NotBlank
    @Column(unique = true,length = 150)
    private Integer aCapacity;
    @NotBlank
    @Column(unique = true,length = 150)
    private Integer mCapacity;
    @NotBlank
    @Column(length = 45)
    private String nameParkingLot;
    @NotBlank

    public Long getId() {
        return idParkingLoot;
    }

    public void setId(Long id) {
        this.idParkingLoot = id;
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

    public String getNameParkingLot() {
        return nameParkingLot;
    }

    public void setNameParkingLot(String nameParkingLot) {
        this.nameParkingLot = nameParkingLot;
    }

    public Long getIdParkingLoot() {
        return idParkingLoot;
    }

    public void setIdParkingLoot(Long idParkingLoot) {
        this.idParkingLoot = idParkingLoot;
    }

    @Override
    public String toString() {
        return "ParkingLoot{" +
                "id=" + idParkingLoot +
                ", name='" + name + '\'' +
                ", aCapacity=" + aCapacity +
                ", mCapacity=" + mCapacity +
                ", nameParkingLot='" + nameParkingLot + '\'' +
                '}';
    }
}
