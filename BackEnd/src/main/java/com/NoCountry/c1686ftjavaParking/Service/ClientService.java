package com.NoCountry.c1686ftjavaParking.Service;


import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import com.NoCountry.c1686ftjavaParking.Repository.ClientRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;


    /**
     * metodo para retornar busqueda por  "id" proporcionado en la request
     */
    public ResponseEntity<Optional<ClientEntitie>> findById(Long idClient) {

        Optional<ClientEntitie> client = clientRepository.findById(idClient);

        //si no han proporciado id en la request
        if (idClient == null) {
            return new ResponseEntity<>(client, HttpStatus.BAD_REQUEST);
        }

        //si no se encuentra el cliente en la bd bad request o caso contrario ok!
        if (client.isEmpty()) {
            return new ResponseEntity<>(client, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(client, HttpStatus.OK);

        }

    }

    /**
     * metodo para retornar busqueda por  "id" proporcionado en la request
     */

    public ResponseEntity<Optional<ClientEntitie>> findByDni(String dni) {

        Optional<ClientEntitie> client = clientRepository.findByDni(dni);

        //si no han proporciado dni en la request
        if (dni == null) {
            return new ResponseEntity<>(client, HttpStatus.BAD_REQUEST);
        }

        //si no se encuentra el cliente en la bd bad request o caso contrario ok!
        if (client.isEmpty()) {
            return new ResponseEntity<>(client, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(client, HttpStatus.OK);

        }

    }

    public ResponseEntity createNewClient(@Valid @RequestBody ClientEntitie client) {

            try {
                clientRepository.save(client);
                return ResponseEntity.ok("new client is create");
            }
            catch (DataIntegrityViolationException e){
                 return ResponseEntity.status(HttpStatus.CONFLICT)
                 .body("Data duplicate");

            }


    }



    public ResponseEntity<List<ClientEntitie>> listOfClient() {
        return new ResponseEntity<>(clientRepository.findAll(),HttpStatus.OK);
    }
}
