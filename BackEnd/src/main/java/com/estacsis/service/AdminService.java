package com.estacsis.service;

import com.estacsis.entity.AdminEntity;
import com.estacsis.entity.ParkingLootEntity;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.repository.AdminRepository;
import com.estacsis.repository.ParkingLootRepository;
import com.estacsis.repository.ParkerRepository;
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
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private ParkingLootRepository parkingLootRepository;

    @Autowired
    private ParkerRepository parkerRepository;

    public AdminEntity createAdmin(AdminEntity adminEntity) {
        return adminRepository.save(adminEntity);
    }

    public List<AdminEntity> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<AdminEntity> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public AdminEntity updateAdmin(Long id, AdminEntity adminEntityDetails) {
        Optional<AdminEntity> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            AdminEntity admin = optionalAdmin.get();
            admin.setName(adminEntityDetails.getName());
            admin.setLastName(adminEntityDetails.getLastName());
            admin.setEmail(adminEntityDetails.getEmail());
            admin.setPasswordAdmin(adminEntityDetails.getPasswordAdmin());
            return adminRepository.save(admin);
        } else {
            throw new RuntimeException("Admin not found with id: " + id);
        }
    }

    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }

    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        parkingLootRepository.save(newParkingLoot);
        return ResponseEntity.ok("New Parking Loot is create");
    }

    public void deleteParkingLoot(Long id) {
        parkingLootRepository.deleteById(id);
    }

    public ResponseEntity<Object> createNewParker(@Valid @RequestBody ParkerEntity newParker){
        try{
            parkerRepository.save(newParker);
            return ResponseEntity.ok("new parker is create");
        }catch (DataAccessException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("null");
        }
    }

    public void deleteParker(Long id) {
        parkerRepository.deleteById(id);
    }
}