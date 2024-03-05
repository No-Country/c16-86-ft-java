package com.estacsis.controller;

import com.estacsis.entity.ParkingEntity;
import com.estacsis.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    @GetMapping("/all")
    public ResponseEntity<List<ParkingEntity>> getAllParking() {
        List<ParkingEntity> parkingList = parkingService.getAllParking();
        return new ResponseEntity<>(parkingList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ParkingEntity> addParking(@RequestBody ParkingEntity parkingEntity) {
        ParkingEntity newParking = parkingService.addParking(parkingEntity);
        return new ResponseEntity<>(newParking, HttpStatus.CREATED);
    }

    // Otros endpoints para actualizar, eliminar, encontrar por ID, etc.
}

