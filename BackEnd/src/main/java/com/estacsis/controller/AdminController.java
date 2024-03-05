package com.estacsis.controller;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/getById/{id}")
    public Optional<AdminEntity> getAdminById(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    @PutMapping("/update/{id}")
    public AdminEntity updateAdmin(@PathVariable Long id, @RequestBody AdminEntity adminDetails) {
        return adminService.updateAdmin(id, adminDetails);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
    }

    @PostMapping("/createParkingLoot")
    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        return adminService.createParkingLoot(newParkingLoot);
    }

    @DeleteMapping("/deleteParkingLoot/{id}")
    public void deleteParkingLoot(@PathVariable Long id) {
        adminService.deleteParkingLoot(id);
    }

    @PostMapping("/createParker")
    public ResponseEntity<Object> createParker(@RequestBody ParkerEntity newParker) {
        return adminService.createNewParker(newParker);
    }

    @DeleteMapping("/deleteParker/{id}")
    public void deleteParker(@PathVariable Long id) {
        adminService.deleteParker(id);
    }
}