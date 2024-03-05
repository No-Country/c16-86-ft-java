package com.estacsis.repository;

import com.estacsis.entity.ParkingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepository extends JpaRepository<ParkingEntity, Long> {
    // Aquí puedes agregar métodos de repositorio personalizados si es necesario
}
