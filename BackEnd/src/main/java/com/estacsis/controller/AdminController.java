package com.estacsis.controller;

import com.estacsis.DTO.AdminDTO;
import com.estacsis.DTO.ParkingLootDTO;
import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.AdminService;
import com.estacsis.service.ParkingLootService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    private ParkingLootService parkingLootService;

    @PostMapping("/create")
    public AdminEntity createAdmin(@RequestBody AdminEntity adminEntity) {
        return adminService.createAdmin(adminEntity);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<AdminDTO>> getAllAdmins() {
        List<AdminDTO> adminDTOs = adminService.getAllAdmins();
        return ResponseEntity.ok(adminDTOs);
    }

    @DeleteMapping("/delete/{idAdmin}")
    public void deleteAdmin(@PathVariable Long idAdmin) {
        adminService.deleteAdmin(idAdmin);
    }

    @GetMapping("/getById/{idAdmin}")
    public Optional<AdminEntity> getAdminById(@PathVariable Long idAdmin) {
        return adminService.getAdminById(idAdmin);
    }

    @PutMapping("/update/{idAdmin}")
    public ResponseEntity<AdminDTO> updateAdmin(@PathVariable Long idAdmin, @RequestBody AdminDTO adminDetails) {
        AdminDTO updateAdmin = adminService.updateAdmin(idAdmin, adminDetails);
        if (updateAdmin != null) {
            return ResponseEntity.status(HttpStatus.OK).body(updateAdmin);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }


    @PostMapping("/createParkingLoot")
    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        return adminService.createParkingLoot(newParkingLoot);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ParkingLootDTO> updateIdParkingLoot(@PathVariable Long id, @RequestBody ParkingLootDTO parkingLoot) {
        ParkingLootDTO updatedParkingLoot = parkingLootService.updateParkingLoot(id, parkingLoot);
        if (updatedParkingLoot != null) {
            return ResponseEntity.ok(updatedParkingLoot);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteParkingLoot/{idParkingLoot}")
    public void deleteParkingLoot(@PathVariable Long idParkingLoot) {
        adminService.deleteParkingLoot(idParkingLoot);

    }

    @PostMapping("/createParker")
    public ResponseEntity<Object> createParker(@RequestBody ParkerEntity newParker) {
        return adminService.createNewParker(newParker);
    }

    @DeleteMapping("/deleteParker/{idParker}")
    public void deleteParker(@PathVariable Long idParker) {
        adminService.deleteParker(idParker);
    }
}