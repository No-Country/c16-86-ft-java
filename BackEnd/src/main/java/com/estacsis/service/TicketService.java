package com.estacsis.service;


import com.estacsis.entity.TicketEntity;
import com.estacsis.repository.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepository ticketRepository;
    TicketEntity ticketEntity;

    public List<TicketEntity> getAllTickets() {
        try {
            return ticketRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();

            throw new RuntimeException
                    ("Failed to retrieve all tickets. Reason: "
                            + e.getMessage());
        }
    }


    public Optional<TicketEntity> getTicketById(Long idTicket) {
        try {
            return ticketRepository.findById(idTicket);
        } catch (Exception e) {
            e.printStackTrace();

            throw new RuntimeException
                    ("Failed to retrieve the ticket by ID. Reason: " + e.getMessage());
        }
    }

    public ResponseEntity<Objects> addTicket(TicketEntity ticketEntity) {
        TicketEntity newTicket = new TicketEntity();
        newTicket.generarPago(ticketEntity.getEntryDate(),ticketEntity.getExitDate());
        ticketRepository.save(newTicket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public void deleteById(Long idTicket) {
        boolean exists = ticketRepository.existsById(idTicket);
        if (!exists) {
            throw new IllegalStateException("ticket with id:" + idTicket + " does not exist");
        } else {
            ticketRepository.deleteById(idTicket);
            System.out.println("Deleted success!");
        }

    }

    @Transactional
    public void updateTicket(Long idTicket, String carLicense) {
        TicketEntity ticketEntity = ticketRepository.findById(idTicket).orElseThrow(() -> new IllegalStateException
                ("Ticket with id " + idTicket + "does not exist"));

        if (carLicense != null && carLicense.length() > 0 && !Objects.equals(ticketEntity.getCarLicense(), carLicense))
            ticketEntity.setCarLicense(carLicense);



    }




}
