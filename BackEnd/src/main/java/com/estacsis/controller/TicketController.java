package com.estacsis.controller;

import com.estacsis.entity.TicketEntity;
import com.estacsis.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/api/v1/tickets"})

public class TicketController {

    @Autowired
    private TicketService ticketService;

    //Endpoint Traer todos los tickets
    @GetMapping(path = {"/all"})
    public List<TicketEntity> getAll() {
        return ticketService.getAllTickets();
    }

    //Endpoint traer ticket por Id
    @GetMapping(path = "/{id}")

    public Optional<TicketEntity> getById(@PathVariable("id") Long idTicket) {
        return ticketService.getTicketById(idTicket);

    }

    //Endopoint para insertar un ticket
    @PostMapping(path = "/{exit}")
    public ResponseEntity<TicketEntity> exitTicket(@RequestBody TicketEntity ticket) {
        return ticketService.addTicket(ticket);


    }

    @PostMapping(path = "/inTicket")
    public ResponseEntity<TicketEntity> inTicket(
            @RequestParam Long idClient, String carLicense, String vehicleType ){
        System.out.println("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        return ticketService.inTicket(idClient,carLicense,vehicleType);

    }

    //Endpoint para eliminar un ticket
    @DeleteMapping(path = "/{id}")
    public void deleleteById(@PathVariable("id") Long idTicket) {
        ticketService.deleteById(idTicket);

    }


    @PutMapping(path = "/{id}")
    public void updateTicket(
            @PathVariable("id") Long idTicket,
            @RequestParam(required = false) String carLicense) {
        ticketService.updateTicket(idTicket, carLicense);
    }


}


