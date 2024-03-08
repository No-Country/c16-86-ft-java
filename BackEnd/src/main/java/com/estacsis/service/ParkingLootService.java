package com.estacsis.service;

import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.repository.ParkingLootRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingLootService {

    private final ParkingLootRepository parkingLootRepository;

    @Autowired
    public ParkingLootService(ParkingLootRepository parkingLootRepository) {
        this.parkingLootRepository = parkingLootRepository;
    }

    public List<ParkingLootEntity> getAllParkingLoots() {
        return parkingLootRepository.findAll();
    }

    public ParkingLootEntity createParkingLoot(ParkingLootEntity parkingLoot) {
        return parkingLootRepository.save(parkingLoot);
    }

    public Optional<ParkingLootEntity> findParkingLootById(Long id) {
        return parkingLootRepository.findById(id);
    }

    public ParkingLootEntity updateParkingLoot(Long id, ParkingLootEntity parkingLoot) {
        if (parkingLootRepository.existsById(id)) {
            parkingLoot.setIdParkingLoot(id);
            return parkingLootRepository.save(parkingLoot);
        }
        return null; // Devolver null si el objeto no existe
    }

    public void deleteParkingLoot(Long id) {
        parkingLootRepository.deleteById(id);
    }

    // Otros métodos según las operaciones que desees realizar con los datos de parking
}