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
        TicketEntity newTicket = new TicketEntity();
        double COSTO_POR_HORA = 10.0;
//        LocalDateTime entryDate = LocalDateTime.of(2024, 3, 8, 10, 0);
//        LocalDateTime exitDate = LocalDateTime.of(2024, 3, 9, 10, 0);

        Duration duration = Duration.between(ticketEntity.getEntryDate(), LocalDateTime.now());
        long hours = duration.toHours(); // Obtener el número de horas de estacionamiento

        double costoTotal = hours * COSTO_POR_HORA; // Calcular el costo total

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

    public ResponseEntity<TicketEntity>inTicket(Long idClient,String carLicense, String vehicle_type ){
        TicketEntity ticketEntity = new TicketEntity();
        Optional <ClientEntity>  clientEntity = clientRepository.findById(idClient);
        ticketEntity.setIdTicket(clientEntity.get().getIdClient());
        ticketEntity.setCarLicense(carLicense);
        ticketEntity.setEntryDate(LocalDateTime.now());
        ticketEntity.setVehicleType(vehicle_type);
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
