package com.estacsis.controller;

import com.estacsis.DTO.ParkingLootDTO;
import com.estacsis.entity.ParkingEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.ParkingLootService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/parkingLoot")
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
    @GetMapping("/findbyid")
    public ResponseEntity<Optional<ParkingLootEntity>> findIdParkingLoot(@RequestParam Long id) {
        Optional<ParkingLootEntity> parkingLoot = parkingLootService.findParkingLootById(id);
        if (parkingLoot.isPresent()) {
            return ResponseEntity.ok(parkingLoot);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/createParkingLoot")
    public ResponseEntity<?> createParkingLoot(@RequestParam Long idParkingLoot){
        return parkingLootService.createParkingLoot(idParkingLoot);
    }


    @GetMapping("/list")
    public ResponseEntity<List<ParkingLootDTO>> getAllParkingLoots() {
        List<ParkingLootDTO> parkingLoots = parkingLootService.getAllParkingLoots();
        return ResponseEntity.ok(parkingLoots);
    }
}