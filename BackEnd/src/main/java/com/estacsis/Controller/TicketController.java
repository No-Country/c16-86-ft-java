package com.estacsis.Controller;

import com.estacsis.Entitie.TicketEntitie;
import com.estacsis.Service.TicketService;
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
    public List<TicketEntitie> getAll() {
        return ticketService.getAllTickets();
    }

    //Endpoint traer ticket por Id
    @GetMapping(path = "/{id}")
    public Optional<TicketEntitie> getById(@PathVariable("id") Integer id) {
        return ticketService.getTicketById(id);
    }

    //Endopoint para insertar un ticket
    @PostMapping(path = "/{add}")
    public TicketEntitie addTicket(@RequestBody TicketEntitie ticket) {
        ticketService.addTicket(ticket);
        return ticket;
    }
    //Endpoint para eliminar un ticket
    @DeleteMapping(path = "/{id}")
    public void deleleteById(@PathVariable("id") Integer id) {
        ticketService.deleteById(id);

    }

    

}


