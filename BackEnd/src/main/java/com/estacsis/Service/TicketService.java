package com.estacsis.Service;

import com.estacsis.Entitie.TicketEntitie;
import com.estacsis.Repository.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepository ticketRepository;

    public List<TicketEntitie> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Optional<TicketEntitie> getTicketById(Long idTicket) {
        return ticketRepository.findById(idTicket);

    }
    public void addTicket(TicketEntitie ticketEntitie) {
        ticketRepository.save(ticketEntitie);
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
        TicketEntitie ticketEntitie = ticketRepository.findById(idTicket).orElseThrow(() -> new IllegalStateException
                ("Ticket with id " + idTicket + "does not exist"));

        if (carLicense != null && carLicense.length() > 0 && !Objects.equals(ticketEntitie.getCarLicense(), carLicense))
            ticketEntitie.setCarLicense(carLicense);
    }
}