package com.bezkoder.spring.datajpa.repository;

import java.util.List;

import com.bezkoder.spring.datajpa.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.datajpa.model.Tutorial;

public interface StationRepository extends JpaRepository<Station, Long> {

    List<Station> findByName(String name);

    //List<Tutorial> findByTitleContaining(String title);

}

