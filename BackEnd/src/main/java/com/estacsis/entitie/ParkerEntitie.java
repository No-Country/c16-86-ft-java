package com.estacsis.entitie;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ParkerEntitie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idParker;
    private String name;
    private String lastName;
    private String dni;
    private String userParker;
    private String passwordParker;

    public ParkerEntitie(){}

    public ParkerEntitie(String name, String lastName, String dni, String userParker, String passwordParker){

        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
        this.userParker = userParker;
        this.passwordParker = passwordParker;

    }

    @Override
    public String toString() {
        return "ParkerEntitie{" +
                "idParker=" + idParker +
                ",name='" + name + '\'' +
                ", lsatName='" + lastName + '\'' +
                ", dni='" + dni + '\'' +
                ", userParker='" + userParker + '\'' +
                ", passwordParker =" + passwordParker +
                '}';
    }

    public Long getIdParker() {
        return idParker;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getDni() {
        return dni;
    }

    public String getUserParker() {
        return userParker;
    }

    public String getPasswordParker() {
        return passwordParker;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public void setUserParker(String userParker) {
        this.userParker = userParker;
    }

    public void setPasswordParker(String passwordParker) {
        this.passwordParker = passwordParker;
    }

}
