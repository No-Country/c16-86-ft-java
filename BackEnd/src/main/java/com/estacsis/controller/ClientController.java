package com.estacsis.controller;

import com.estacsis.entitie.ClientEntitie;
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

    @GetMapping("/")
    public String welcome(){
        return "pagina principal";
    }

    @GetMapping("/findbyid")
    public ResponseEntity<Optional<ClientEntitie>> createClient(@RequestParam Long idClient){

        return clientService.findById(idClient);
    }

    @GetMapping("/findbydni")
    public ResponseEntity<Optional<ClientEntitie>> createClient(@RequestParam String dni){

        return clientService.findByDni(dni);
    }

    @GetMapping("/listofclient")
    public ResponseEntity<List<ClientEntitie>> listOfClient(){
        return clientService.listOfClient();
    }

    @PostMapping("/newclient") //ver porque no manda por body el error
    public ResponseEntity createClient(@RequestBody ClientEntitie client){
    return clientService.createNewClient(client);

    }



}

