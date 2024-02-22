package com.estacsis.estacsis.Repository;
import com.estacsis.estacsis.Entitie.TicketEntitie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<TicketEntitie, Integer> {
}
