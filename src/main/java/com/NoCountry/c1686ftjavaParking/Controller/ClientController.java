package com.NoCountry.c1686ftjavaParking.Controller;

import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import com.NoCountry.c1686ftjavaParking.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//http://localhost:3000/api/v1/agregarusuario
@RestController
@RequestMapping("/api/v1")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/welcome")
    public String welcome() {
        return "<center><H1>Welcome to parking aplicattion</H1></center>";
    }


    @GetMapping("/readclient")
    public ResponseEntity<Optional<ClientEntitie>> createClient(@RequestBody Long idClient){
        System.out.println(idClient);
        return clientService.readClient(idClient);
    }

    @PostMapping("/newclient")
    public String createClient(@RequestBody ClientEntitie client){

        clientService.createNewClient(client);
        System.out.println(client);

        return "Client create successful";
    }



}

