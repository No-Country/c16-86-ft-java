package com.estacsis.controller;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/create")
    public AdminEntity createAdmin(@RequestBody AdminEntity adminEntity) {
        return adminService.createAdmin(adminEntity);
    }

    @GetMapping("/getAll")
    public List<AdminEntity> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/getById/{idAdmin}")
    public Optional<AdminEntity> getAdminById(@PathVariable Long idAdmin) {
        return adminService.getAdminById(idAdmin);
    }

    @PutMapping("/update/{idAdmin}")
    public ResponseEntity<AdminEntity> updateAdmin(@PathVariable Long idAdmin, @RequestBody AdminEntity adminDetails) {
        AdminEntity updateAdmin = adminService.updateAdmin(idAdmin, adminDetails);
        if (updateAdmin != null){
            return ResponseEntity.status(HttpStatus.OK).body(updateAdmin);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @DeleteMapping("/delete/{idAdmin}")
    public void deleteAdmin(@PathVariable Long idAdmin) {
        adminService.deleteAdmin(idAdmin);
    }

    @PostMapping("/createParkingLoot")
    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        return adminService.createParkingLoot(newParkingLoot);
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