package com.estacsis.Repository;

import com.estacsis.Entitie.ParkerEntitie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkerRepository extends JpaRepository<ParkerEntitie, Long > {
}
