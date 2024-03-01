package com.estacsis.repository;
import com.estacsis.entitie.TicketEntitie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<TicketEntitie, Integer> {
}
