package com.estacsis.service;


import com.estacsis.entity.ClientEntity;
import com.estacsis.entity.TicketEntity;
import com.estacsis.repository.ClientRepository;
import com.estacsis.repository.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    ClientRepository clientRepository;


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

    public ResponseEntity<TicketEntity> addTicket(TicketEntity ticketEntity) {
        Duration duration = Duration.between(ticketEntity.getEntryDate(), LocalDateTime.now());
        System.out.println(duration.toMinutes());
        double hours = duration.toMinutes()/60; // Obtener el número de horas de estacionamiento
        double costoTotal = duration.toMinutes()/60.0 * 20; // Calcular el costo total
        System.out.println(costoTotal);
        ticketEntity.setTimeConsumed(hours);
        ticketEntity.setExitDate(LocalDateTime.now());
        ticketEntity.setAmount(costoTotal);
        ticketRepository.save(ticketEntity);
        return new ResponseEntity<>(ticketEntity, HttpStatus.OK);
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

    public ResponseEntity<TicketEntity> inTicket(Long idClient, String carLicense, String vehicleType) {
        TicketEntity ticketEntity = new TicketEntity();
        Optional<ClientEntity> clientEntity = clientRepository.findById(idClient);
        ticketEntity.setClientEntity(clientEntity.get());
        ticketEntity.setCarLicense(carLicense);
        ticketEntity.setEntryDate(LocalDateTime.now());
        ticketEntity.setVehicleType(vehicleType);
        ticketRepository.save(ticketEntity);
        return new ResponseEntity<>(ticketEntity, HttpStatus.OK);
    }

    @Transactional
    public void updateTicket(Long idTicket, String carLicense) {
        TicketEntity ticketEntity = ticketRepository.findById(idTicket).orElseThrow(() -> new IllegalStateException
                ("Ticket with id " + idTicket + "does not exist"));

        if (carLicense != null && carLicense.length() > 0 && !Objects.equals(ticketEntity.getCarLicense(), carLicense))
            ticketEntity.setCarLicense(carLicense);
    }
}