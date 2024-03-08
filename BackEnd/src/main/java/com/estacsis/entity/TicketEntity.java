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
    @JoinColumn(name = "id_client")
    private ClientEntity clientEntity;
    @Column(name = "car_license", unique = true, nullable = false)
    private String carLicense;
    @Column(name = "entry_date")
    private LocalDateTime entryDate;
    @Column(name = "exit_date")
    private LocalDateTime exitDate;
    @Column(name = "vehicle_type")
    private String vehicleType;
    @Column(name = "amount")
    private double amount;
    @Column(name = "time_consumed")
    private double timeConsumed;




}