package com.NoCountry.c1686ftjavaParking.Controller;

import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import com.NoCountry.c1686ftjavaParking.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//http://localhost:3000/api/v1/agregarusuario
@RestController
@RequestMapping("/api/v1/client")
public class ClientController {

    @Autowired
    private ClientService clientService;




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

