package com.NoCountry.c1686ftjavaParking.Entitie;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.sql.Date;
import java.time.LocalDate;


@Entity
@Table(name = "client")
public class ClientEntitie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    @NotBlank

    @Column(unique = true,length = 10)
    private String dni;
    @NotBlank
    @Column(length = 45)
    private String firstname;
    @NotBlank
    @Column(length = 45)
    private String secondname;
    @NotBlank
    @Column(unique = true,length = 45)
    private String phone;
    @NotNull
    @Temporal(TemporalType.DATE)
    public LocalDate high;

    public ClientEntitie() {
    }

    public ClientEntitie(String dni, String firstname, String secondname, String phone, LocalDate date) {
        this.dni = dni;
        this.firstname = firstname;
        this.secondname = secondname;
        this.phone = phone;
        this.high = date;
    }

    @Override
    public String toString() {
        return "ClientEntitie{" +
                "idClient=" + idClient +
                ", dni='" + dni + '\'' +
                ", firstname='" + firstname + '\'' +
                ", secondname='" + secondname + '\'' +
                ", phone='" + phone + '\'' +
                ", high=" + high +
                '}';
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getHigh() {
        return high;
    }

    public void setHigh(LocalDate high) {
        this.high = high;
    }
}
