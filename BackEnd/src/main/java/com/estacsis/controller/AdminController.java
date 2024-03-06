package com.estacsis.controller;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< Updated upstream
=======
import org.springframework.http.HttpStatus;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    }

    @PostMapping("/createParkingLoot")
    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        return adminService.createParkingLoot(newParkingLoot);
    }

<<<<<<< Updated upstream
    @DeleteMapping("/deleteParkingLoot/{id}")
    public void deleteParkingLoot(@PathVariable Long id) {
        adminService.deleteParkingLoot(id);
=======
    @DeleteMapping("/deleteParkingLoot/{idParkingLoot}")
    public void deleteParkingLoot(@PathVariable Long idParkingLoot) {
        adminService.deleteParkingLoot(idParkingLoot);
>>>>>>> Stashed changes
    }

    @PostMapping("/createParker")
    public ResponseEntity<Object> createParker(@RequestBody ParkerEntity newParker) {
        return adminService.createNewParker(newParker);
    }

<<<<<<< Updated upstream
    @DeleteMapping("/deleteParker/{id}")
    public void deleteParker(@PathVariable Long id) {
        adminService.deleteParker(id);
=======
    @DeleteMapping("/deleteParker/{idParker}")
    public void deleteParker(@PathVariable Long idParker) {
        adminService.deleteParker(idParker);
>>>>>>> Stashed changes
    }
}