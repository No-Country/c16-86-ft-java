package com.estacsis.repository;

import com.estacsis.entity.ParkingLootEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingLootRepository extends JpaRepository<ParkingLootEntity, Long> {
    // Aquí puedes agregar métodos personalizados de consulta si es necesario
}