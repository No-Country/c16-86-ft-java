package com.estacsis.repository;

import com.estacsis.entitie.ClientEntitie;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntitie,Long> {

    @Query("SELECT c FROM ClientEntitie c WHERE c.dni = :dni")
public Optional<ClientEntitie> findByDni(String dni);



}