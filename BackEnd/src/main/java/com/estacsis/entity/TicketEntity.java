package com.estacsis.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "ticket")
public class TicketEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTicket;


    //Relacion Muchos a Uno
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "idClient")
    private ClientEntity clientEntity;
    @Column(name = "carLicense", unique = true, nullable = false)
    private String carLicense;
    private LocalDateTime entryDate;
    private LocalDateTime exitDate;
    private String vehicleType;
    private double amount;
    private String timeConsumed;

    double COSTO_POR_HORA = 10.0;

    public void generarPago (LocalDateTime entryDate, LocalDateTime exitDate ) {

//        LocalDateTime entryDate = LocalDateTime.of(2024, 3, 8, 10, 0);
//        LocalDateTime exitDate = LocalDateTime.of(2024, 3, 9, 10, 0);

        Duration duration = Duration.between(entryDate, exitDate);
        long hours = duration.toHours(); // Obtener el número de horas de estacionamiento

        double costoTotal = hours * COSTO_POR_HORA; // Calcular el costo total

        System.out.println("Costo total del estacionamiento: $" + costoTotal);


    }
}