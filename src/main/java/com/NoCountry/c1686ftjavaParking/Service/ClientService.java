package com.NoCountry.c1686ftjavaParking.Service;


import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import com.NoCountry.c1686ftjavaParking.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    /**
     * CRUD
     */

    public ResponseEntity<Optional<ClientEntitie>> readClient(Long idClient){
        Optional<ClientEntitie> client=clientRepository.findById(idClient);

        if (client.isEmpty()){
            return new ResponseEntity<>(client, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(client, HttpStatus.OK);

        }


    }
    public String createNewClient(ClientEntitie client) {
        if (client!=null) {
            clientRepository.save(client);
            return "OK";
        }
        return "bad request";
    }


}
