package com.estacsis.controller;

import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.ParkingLootService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/parking")
public class ParkingLootController {
    private final ParkingLootService parkingLootService;

    @Autowired
    public ParkingLootController(ParkingLootService parkingLootService) {
        this.parkingLootService = parkingLootService;
    }

    // Endpoints para la gestión de los parking
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Parking Management System";
    }

    // Endpoint para buscar un ParkingLoot por su ID
    @GetMapping("/{id}")
    public ResponseEntity<ParkingLootEntity> findParkingLootById(@PathVariable Long id) {
        Optional<ParkingLootEntity> parkingLoot = parkingLootService.findParkingLootById(id);
        return parkingLoot.map(entity -> ResponseEntity.ok().body(entity))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint para actualizar un ParkingLoot
    @PutMapping("/{id}")
    public ResponseEntity<ParkingLootEntity> updateParkingLoot(@PathVariable Long id, @RequestBody ParkingLootEntity parkingLoot) {
        ParkingLootEntity updatedParkingLoot = parkingLootService.updateParkingLoot(id, parkingLoot);
        return updatedParkingLoot != null ?
                ResponseEntity.ok(updatedParkingLoot) :
                ResponseEntity.notFound().build();
    }
    @GetMapping("/findbyid")
    public ResponseEntity<Optional<ParkingLootEntity>> findIdParkingLoot(@RequestParam Long id) {
        Optional<ParkingLootEntity> parkingLoot = parkingLootService.findParkingLootById(id);
        if (parkingLoot.isPresent()) {
            return ResponseEntity.ok(parkingLoot);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/list")
    public ResponseEntity<List<ParkingLootEntity>> getAllParkingLoots() {
        List<ParkingLootEntity> parkingLoots = parkingLootService.getAllParkingLoots();
        return ResponseEntity.ok(parkingLoots);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ParkingLootEntity> updateIdParkingLoot(@PathVariable Long id, @RequestBody ParkingLootEntity parkingLoot) {
        ParkingLootEntity updatedParkingLoot = parkingLootService.updateParkingLoot(id, parkingLoot);
        if (updatedParkingLoot != null) {
            return ResponseEntity.ok(updatedParkingLoot);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<ParkingLootEntity> createParkingLoot(@RequestBody ParkingLootEntity parkingLoot) {
        parkingLootService.createParkingLoot(parkingLoot);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteIdParkingLoot(@PathVariable Long id) {
        parkingLootService.deleteParkingLoot(id);
        return ResponseEntity.noContent().build();
    }
}