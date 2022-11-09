package com.bezkoder.spring.datajpa.repository;
import java.util.List;

import com.bezkoder.spring.datajpa.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
public interface TripRepository extends JpaRepository<Trip, Long> {
    List<Trip> findById(String name);
}
