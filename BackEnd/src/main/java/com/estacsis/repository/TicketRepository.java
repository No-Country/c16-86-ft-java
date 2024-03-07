package com.estacsis.repository;

import com.estacsis.entity.TicketEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TicketRepository extends JpaRepository<TicketEntity, Long> {


}
