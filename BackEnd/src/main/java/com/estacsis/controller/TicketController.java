package com.estacsis.controller;

import com.estacsis.entity.TicketEntity;
import com.estacsis.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @PostMapping(path = "/{add}")
    public TicketEntity addTicket(@RequestBody TicketEntity ticket) {
        // Realizar cálculos necesarios para generar el pago
        ticket.generarPago(ticket.getEntryDate(), ticket.getExitDate());

        // Agregar el ticket utilizando el servicio
        ticketService.addTicket(ticket);

        return ticket;
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


