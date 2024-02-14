package com.NoCountry.c1686ftjavaParking.Entitie;

import jakarta.persistence.*;

import java.sql.Date;
import java.time.LocalDate;


@Entity
@Table(name = "client")
public class ClientEntitie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;

    @Column(length = 45)
    private String firstname;
    @Column(length = 45)
    private String secondname;
    @Column(length = 45)
    private String phone;

    @Temporal(TemporalType.DATE)
    public LocalDate high;

    public ClientEntitie() {
    }

    public ClientEntitie(String firstname, String secondname, String phone,LocalDate date) {
        this.firstname = firstname;
        this.secondname = secondname;
        this.phone = phone;
        this.high= date;
    }

    @Override
    public String toString() {
        return "ClientEntitie{" +
                "idClient=" + idClient +
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
