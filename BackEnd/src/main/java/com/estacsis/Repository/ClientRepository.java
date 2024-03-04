package com.estacsis.Repository;

import com.estacsis.Entitie.ClientEntity;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long> {

    @Query("SELECT c FROM ClientEntity c WHERE c.dni = :dni")
public Optional<ClientEntity> findByDni(String dni);



}
