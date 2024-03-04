package com.estacsis.Controller;

import com.estacsis.Entitie.ParkerEntity;
import com.estacsis.Service.ParkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ParkerController {
    @Autowired
    private ParkerService parkerService;


    @GetMapping("/parkers")
    public List<ParkerEntity> getListParkers(){
        return parkerService.getParkers();
    }
    @PostMapping("/newparker")
    public ResponseEntity createParker(@RequestBody ParkerEntity parker ){
        return parkerService.createNewParker(parker);
    }
    @PutMapping("/updateparker/{idParker}")
    public ResponseEntity<ParkerEntity> updateParker(@PathVariable Long idParker, @RequestBody ParkerEntity updateParker){
        ParkerEntity parker = parkerService.updateParker(idParker,updateParker);
        if (parker !=null){
            return ResponseEntity.status(HttpStatus.OK).body(parker);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @DeleteMapping("/deletedparker/{idParker}")
    public ResponseEntity<String> deletedParker(@PathVariable Long idParker){
        boolean deleted = parkerService.deletedParkerById(idParker);
        if (deleted){
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found");
    }

}
