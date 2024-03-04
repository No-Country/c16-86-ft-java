package com.estacsis.service;

<<<<<<< HEAD:BackEnd/src/main/java/com/estacsis/Service/TicketService.java
import com.estacsis.Entitie.TicketEntity;
import com.estacsis.Repository.TicketRepository;
=======
import com.estacsis.entity.TicketEntitie;
import com.estacsis.repository.TicketRepository;
>>>>>>> main:BackEnd/src/main/java/com/estacsis/service/TicketService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepository ticketRepository;

    public List<TicketEntity> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Optional<TicketEntity> getTicketById(int id) {
        return ticketRepository.findById(id);

    }
    public void addTicket(TicketEntity ticketEntity) {
        ticketRepository.save(ticketEntity);
    }

    public void deleteById(Integer id) {
        boolean exists = ticketRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("ticket with id:" + id + " does not exist");
        } else {
            ticketRepository.deleteById(id);
            System.out.println("Deleted success!");
        }

    }
}