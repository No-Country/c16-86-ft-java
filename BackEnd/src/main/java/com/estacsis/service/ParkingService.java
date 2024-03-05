package com.estacsis.service;

import com.estacsis.entity.ParkingEntity;
import com.estacsis.repository.ParkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingService {

    @Autowired
    private ParkingRepository parkingRepository;

    public List<ParkingEntity> getAllParking() {
        return parkingRepository.findAll();
    }

    public ParkingEntity addParking(ParkingEntity parkingEntity) {
        return parkingRepository.save(parkingEntity);
    }

    // Otros métodos de servicio como actualizar, eliminar, encontrar por ID, etc.
}
