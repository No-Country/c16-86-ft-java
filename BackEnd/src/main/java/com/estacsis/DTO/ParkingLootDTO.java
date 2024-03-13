package com.estacsis.DTO;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingLootEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ParkingLootDTO {
    private Long idParkingLoot;
    private Integer aCapacity;
    private Integer mCapacity;
    private Double aTarifa;
    private Double mTarifa;
    private String nameParkingLoot;
    private Long idAdmin; // Id de Admin
    private List<Long> parkerIds; // Lista de IDs de Parker

    public ParkingLootDTO() {
    }

    public ParkingLootDTO(ParkingLootEntity parkingLoot){
        this.idParkingLoot=parkingLoot.getIdParkingLoot();
        this.aCapacity=parkingLoot.getaCapacity();
        this.mCapacity=parkingLoot.getmCapacity();
        this.nameParkingLoot=parkingLoot.getNameParkingLoot();
        this.aTarifa=parkingLoot.getaTarifa();
        this.mTarifa=parkingLoot.getmTarifa();
        AdminEntity admin = parkingLoot.getAdmin();
        if (admin != null) {
            this.idAdmin = admin.getIdAdmin();
        }
        List<Long> parkersIds = new ArrayList<>();
        Set<ParkerEntity> parkers = (Set<ParkerEntity>) parkingLoot.getParker();
        for (ParkerEntity parker:parkers){
            parkersIds.add(parker.getIdParker());
        }
        this.parkerIds = parkersIds;
    }

    // Getters y setters

    public Long getIdParkingLoot() {
        return idParkingLoot;
    }

    public void setIdParkingLoot(Long idParkingLoot) {
        this.idParkingLoot = idParkingLoot;
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

    public Long getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(Long idAdmin) {
        this.idAdmin = idAdmin;
    }

    public List<Long> getParkerIds() {
        return parkerIds;
    }

    public void setParkerIds(List<Long> parkerIds) {
        this.parkerIds = parkerIds;
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
}

