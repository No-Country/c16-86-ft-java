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

<<<<<<< Updated upstream
    public Optional<AdminEntity> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public AdminEntity updateAdmin(Long id, AdminEntity adminEntityDetails) {
        Optional<AdminEntity> optionalAdmin = adminRepository.findById(id);
=======
    public Optional<AdminEntity> getAdminById(Long idAdmin) {
        return adminRepository.findById(idAdmin);
    }

    public AdminEntity updateAdmin(Long idAdmin, AdminEntity adminEntityDetails) {
        Optional<AdminEntity> optionalAdmin = adminRepository.findById(idAdmin);
>>>>>>> Stashed changes
        if (optionalAdmin.isPresent()) {
            AdminEntity admin = optionalAdmin.get();
            admin.setName(adminEntityDetails.getName());
            admin.setLastName(adminEntityDetails.getLastName());
            admin.setEmail(adminEntityDetails.getEmail());
            admin.setPasswordAdmin(adminEntityDetails.getPasswordAdmin());
            return adminRepository.save(admin);
        } else {
<<<<<<< Updated upstream
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
=======
            throw new RuntimeException("Admin not found with id: " + idAdmin);
        }
    }

    public void deleteAdmin(Long idAdmin) {
        adminRepository.deleteById(idAdmin);
    }

    public ResponseEntity<Object> createParkingLoot(@RequestBody ParkingLootEntity newParkingLoot) {
        Optional<AdminEntity> adminOptional = adminRepository.findAll().stream().findFirst();
        if (adminOptional.isPresent()){
            AdminEntity admin = adminOptional.get();
            newParkingLoot.setAdmin(admin);
            parkingLootRepository.save(newParkingLoot);
            return ResponseEntity.ok("New Parking Loot is create");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found");
        }
    }

    public void deleteParkingLoot(Long idParkingLoot) {
        parkingLootRepository.deleteById(idParkingLoot);
    }

    public ResponseEntity<Object> createNewParker(@Valid @RequestBody ParkerEntity newParker){
        Optional<AdminEntity> adminOptional = adminRepository.findAll().stream().findFirst();
        Optional<ParkingLootEntity> parkingLootEntityOptional = parkingLootRepository.findAll().stream().findFirst();
        if (adminOptional.isPresent() && parkingLootEntityOptional.isPresent()){
            AdminEntity admin = adminOptional.get();
            ParkingLootEntity parkingLoot = parkingLootEntityOptional.get();
            newParker.setAdmin(admin);
            newParker.setParkingLoot(parkingLoot);
            parkerRepository.save(newParker);
            return ResponseEntity.ok("New Parker is create");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" not found");
        }
        /*try{
>>>>>>> Stashed changes
            parkerRepository.save(newParker);
            return ResponseEntity.ok("new parker is create");
        }catch (DataAccessException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("null");
<<<<<<< Updated upstream
        }
=======
        }*/
>>>>>>> Stashed changes
    }

    public void deleteParker(Long id) {
        parkerRepository.deleteById(id);
    }
}