package com.estacsis.controller;

import com.estacsis.entity.ClientEntity;
import com.estacsis.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RequestMapping("/api/v1")
@RestController

public class ClientController {

    @Autowired
    private ClientService clientService;


    @GetMapping("/findbyid")
    public ResponseEntity<Optional<ClientEntity>> createClient(@RequestParam Long idClient){

        return clientService.findById(idClient);
    }

   /* @GetMapping("/findbydni")
    public ResponseEntity<Optional<ClientEntity>> createClient(@RequestParam String dni){

        return clientService.findByDni(dni);
    }*/

    @GetMapping("/listofclient")
    public ResponseEntity<List<ClientEntity>> listOfClient(){
        return clientService.listOfClient();
    }

    @PostMapping("/newclient") //ver porque no manda por body el error
    public ResponseEntity createClient(@RequestBody ClientEntity client){
    return clientService.createNewClient(client);

    }



}

