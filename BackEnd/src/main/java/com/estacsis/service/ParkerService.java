package com.estacsis.service;

import com.estacsis.entitie.ParkerEntitie;
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
public class ParkerService {
    @Autowired
    private ParkerRepository parkerRepository;

    public List<ParkerEntitie> getParkers(){
        return parkerRepository.findAll();
    }

    public ResponseEntity<Object> createNewParker(@Valid @RequestBody ParkerEntitie newParker){
        try{
            parkerRepository.save(newParker);
            return ResponseEntity.ok("new parker is create");
        }catch (DataAccessException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("null");
        }
    }

    public ParkerEntitie updateParker(Long idParker, ParkerEntitie parkerEntitie ){
        Optional<ParkerEntitie> parker = parkerRepository.findById(idParker);
        if (parker.isPresent()){
            ParkerEntitie parkerToUpdate = parker.get();
            if (parkerEntitie.getName() != null){
                parkerToUpdate.setName(parkerEntitie.getName());
            }
            if (parkerEntitie.getLastName() != null){
                parkerToUpdate.setLastName(parkerEntitie.getLastName());
            }
            if (parkerEntitie.getDni() != null){
                parkerToUpdate.setDni(parkerEntitie.getDni());
            }
            if (parkerEntitie.getUserParker() != null){
                parkerToUpdate.setUserParker(parkerEntitie.getUserParker());
            }
            if (parkerEntitie.getPasswordParker()!=null){
                parkerToUpdate.setPasswordParker(parkerEntitie.getPasswordParker());
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
