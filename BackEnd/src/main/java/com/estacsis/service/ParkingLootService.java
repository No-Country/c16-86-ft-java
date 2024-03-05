package com.estacsis.service;

import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.repository.ParkingLootRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    public ResponseEntity <Object>createParkingLoot(@Valid @RequestBody ParkingLootEntity parkingLoot) {
        try{
            parkingLootRepository.save(new ParkingLootEntity());
            return ResponseEntity.ok("new parker is create");
        }catch (DataAccessException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("null");
        }
    }

    public Optional<ParkingLootEntity> findParkingLootById(Long id) {
        return parkingLootRepository.findById(id);
    }

    public ParkingLootEntity updateParkingLoot(Long id, ParkingLootEntity parkingLoot) {
        if (parkingLootRepository.existsById(id)) {
            parkingLoot.setIdParkingLoot(id);
            parkingLootRepository.save(parkingLoot);
            return parkingLoot;
        }
        return null; // Devolver null si el objeto no existe
    }

    public void deleteParkingLoot(Long id) {
        parkingLootRepository.deleteById(id);
    }

    // Otros métodos según las operaciones que desees realizar con los datos de parking
}