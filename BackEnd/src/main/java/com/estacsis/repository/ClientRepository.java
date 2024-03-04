package com.estacsis.repository;

<<<<<<< HEAD:BackEnd/src/main/java/com/estacsis/Repository/ClientRepository.java
import com.estacsis.Entitie.ClientEntity;
=======
import com.estacsis.entity.ClientEntitie;
>>>>>>> main:BackEnd/src/main/java/com/estacsis/repository/ClientRepository.java


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long> {

    @Query("SELECT c FROM ClientEntity c WHERE c.dni = :dni")
public Optional<ClientEntity> findByDni(String dni);



}
