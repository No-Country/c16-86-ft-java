package com.estacsis.DTO;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingEntity;
import com.estacsis.entity.ParkingLootEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ParkingDTO {
    private Long idParking;
    private Boolean state = true;
    private String nomenclatureSection;
    private String vehicleType;
    private ParkingLootEntity idParkingLoot; // Id de ParkingLoot
    private List<Long> parkerIds; // Lista de IDs de Parker
    public ParkingDTO() {
    }

    public ParkingDTO(ParkingEntity parking){
        this.idParking=parking.getIdParking();
        this.state=parking.getState();
        this.nomenclatureSection = parking.getNomenclatureSection();
        this.vehicleType = parking.getVehicleType();
        this.idParkingLoot= parking.getParkingLoot();
//        AdminEntity admin = parkingLoot.getAdmin();
//        if (admin != null) {
//            this.idAdmin = admin.getIdAdmin();
//        }
//        List<Long> parkersIds = new ArrayList<>();
//        Set<ParkerEntity> parkers = (Set<ParkerEntity>) parking.getParker();
//        for (ParkerEntity parker:parkers){
//            parkersIds.add(parker.getIdParker());
//        }
//        this.parkerIds = parkersIds;
    }
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
    public List<Long> getParkerIds() {
        return parkerIds;
    }
    public void setParkerIds(List<Long> parkerIds) {
        this.parkerIds = parkerIds;
    }

}


