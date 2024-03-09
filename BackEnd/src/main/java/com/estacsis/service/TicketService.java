package com.estacsis.service;

import com.estacsis.entity.ClientEntity;
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
public class TicketService {
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

}