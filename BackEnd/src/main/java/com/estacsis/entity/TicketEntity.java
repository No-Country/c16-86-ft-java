package com.estacsis.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "ticket")
public class TicketEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "clientId")
    private ClientEntity clientEntity;
    @Column(name = "carLicense", unique = true, nullable = false)
    private String carLicense;
    private LocalDate entryDate = LocalDate.from(LocalDateTime.now());
    private String vehicleType;
    private double amount;
    private String timeConsumed;





}