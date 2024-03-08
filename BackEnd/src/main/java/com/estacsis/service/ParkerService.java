package com.estacsis.service;

import com.estacsis.DTO.ParkerDTO;
import com.estacsis.entity.ParkerEntity;
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
import java.util.stream.Collectors;

@Service
public class ParkerService {
    @Autowired
    private ParkerRepository parkerRepository;

    public List<ParkerDTO> getParkersDTO() {
        List<ParkerEntity> parkerEntities = parkerRepository.findAll();
        return parkerEntities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    private ParkerDTO convertToDTO(ParkerEntity parkerEntity) {
        ParkerDTO parkerDTO = new ParkerDTO();
        parkerDTO.setIdParker(parkerEntity.getIdParker());
        parkerDTO.setName(parkerEntity.getName());
        parkerDTO.setLastName(parkerEntity.getLastName());
        parkerDTO.setDni(parkerEntity.getDni());
        parkerDTO.setUserParker(parkerEntity.getUserParker());
        parkerDTO.setPasswordParker(parkerEntity.getPasswordParker());
        parkerDTO.setParkingLootId(parkerEntity.getParkingLoot().getIdParkingLoot());
        parkerDTO.setAdminId(parkerEntity.getAdmin().getIdAdmin());

        return parkerDTO;
    }

    public ResponseEntity<Object> createNewParker(@Valid @RequestBody ParkerEntity newParker){
        try{
            parkerRepository.save(newParker);
            return ResponseEntity.ok("new parker is create");
        }catch (DataAccessException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("null");
        }
    }

    public ParkerEntity updateParker(Long idParker, ParkerEntity parkerEntity){
        Optional<ParkerEntity> parker = parkerRepository.findById(idParker);
        if (parker.isPresent()){
            ParkerEntity parkerToUpdate = parker.get();
            if (parkerEntity.getName() != null){
                parkerToUpdate.setName(parkerEntity.getName());
            }
            if (parkerEntity.getLastName() != null){
                parkerToUpdate.setLastName(parkerEntity.getLastName());
            }
            if (parkerEntity.getDni() != null){
                parkerToUpdate.setDni(parkerEntity.getDni());
            }
            if (parkerEntity.getUserParker() != null){
                parkerToUpdate.setUserParker(parkerEntity.getUserParker());
            }
            if (parkerEntity.getPasswordParker()!=null){
                parkerToUpdate.setPasswordParker(parkerEntity.getPasswordParker());
            }
            return parkerRepository.save(parkerToUpdate);
        }else {
            return null;
        }
    }

    public boolean deletedParkerById(Long idParker){
        if (parkerRepository.existsById(idParker)){
            parkerRepository.deleteById(idParker);
            return true;
        }
        return false;
    }


}
