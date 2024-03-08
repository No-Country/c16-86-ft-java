package com.estacsis.service;

import com.estacsis.DTO.ParkingLootDTO;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.repository.ParkingLootRepository;
import com.estacsis.repository.ParkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ParkingLootService {
    @Autowired
    private ParkingRepository parkingRepository;

    @Autowired
    private ParkingLootRepository parkingLootRepository;

    public List<ParkingLootDTO> getAllParkingLoots() {
        List<ParkingLootEntity> parkingLootEntities = parkingLootRepository.findAll();
        return parkingLootEntities.stream().map(parkingLoot -> {
            ParkingLootDTO parkingLootDTO = new ParkingLootDTO();
            parkingLootDTO.setIdParkingLoot(parkingLoot.getIdParkingLoot());
            parkingLootDTO.setaCapacity(parkingLoot.getaCapacity());
            parkingLootDTO.setmCapacity(parkingLoot.getmCapacity());
            parkingLootDTO.setNameParkingLoot(parkingLoot.getNameParkingLoot());
            parkingLootDTO.setIdAdmin(parkingLoot.getAdmin().getIdAdmin());
            List<Long> parkerIds = parkingLoot.getParker().stream()
                    .map(ParkerEntity::getIdParker)
                    .collect(Collectors.toList());
            parkingLootDTO.setParkerIds(parkerIds);
            return parkingLootDTO;
        }).collect(Collectors.toList());
    }

    public ParkingLootEntity createParkingLoot(ParkingLootEntity parkingLoot) {
        return parkingLootRepository.save(parkingLoot);
    }

    public Optional<ParkingLootEntity> findParkingLootById(Long id) {
        return parkingLootRepository.findById(id);
    }

    public ParkingLootDTO updateParkingLoot(Long idParkingLoot, ParkingLootDTO parkingLootDetails) {
        Optional<ParkingLootEntity> optionalParkingLoot = parkingLootRepository.findById(idParkingLoot);
        if (optionalParkingLoot.isPresent()) {
            ParkingLootEntity parkingLoot = optionalParkingLoot.get();
            parkingLoot.setaCapacity(parkingLootDetails.getaCapacity());
            parkingLoot.setmCapacity(parkingLootDetails.getmCapacity());
            parkingLoot.setNameParkingLoot(parkingLootDetails.getNameParkingLoot());
            ParkingLootEntity updateParkingLoot = parkingLootRepository.save(parkingLoot);
            ParkingLootDTO parkingLootDTO = new ParkingLootDTO(updateParkingLoot);

            return parkingLootDTO;
        }
        return null; // Devolver null si el objeto no existe
    }

    public ResponseEntity<?> createParkingLoot(Long id) {
        Optional<ParkingLootEntity> parkingLootEntity = parkingLootRepository.findById(id);

        if (parkingLootEntity.isPresent()) {
            List<ParkingEntity> listCapacity = new ArrayList<>();

            for (int i = 0; i < parkingLootEntity.get().getaCapacity(); i++) {
                ParkingEntity parkingEntity = new ParkingEntity(true, "A" + (i + 1), "Car");
                parkingEntity.setParkingLoot(parkingLootEntity.get()); // Establecer la relación
                listCapacity.add(parkingEntity);
            }

            for (int i = 0; i < parkingLootEntity.get().getmCapacity(); i++) {
                ParkingEntity parkingEntity = new ParkingEntity(true, "M" + (i + 1), "Motorcycle");
                parkingEntity.setParkingLoot(parkingLootEntity.get()); // Establecer la relación
                listCapacity.add(parkingEntity);
            }

            parkingLootEntity.get().setParkingEntities(listCapacity);
            parkingLootRepository.save(parkingLootEntity.get());

            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public void deleteParkingLoot(Long id) {
        parkingLootRepository.deleteById(id);
    }

}