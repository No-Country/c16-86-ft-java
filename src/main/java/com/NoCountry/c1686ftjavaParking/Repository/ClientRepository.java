package com.NoCountry.c1686ftjavaParking.Repository;

import com.NoCountry.c1686ftjavaParking.Entitie.ClientEntitie;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntitie,Long> {



}
