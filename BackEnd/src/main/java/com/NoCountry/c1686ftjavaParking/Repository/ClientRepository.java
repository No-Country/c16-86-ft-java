package com.NoCountry.c1686ftjavaParking.Repository;

import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import jakarta.persistence.Id;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntitie,Long> {

    @Query("SELECT c FROM ClientEntitie c WHERE c.dni = :dni")
public Optional<ClientEntitie> findByDni(String dni);



}
