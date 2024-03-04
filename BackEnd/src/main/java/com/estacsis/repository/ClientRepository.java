package com.estacsis.repository;

import com.estacsis.entity.ClientEntity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long> {
    //@Query("SELECT c FROM ClientEntitie c WHERE c.dni = :dni")
//public Optional<ClientEntity> findByDni(String dni);



}
