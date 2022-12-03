package com.bezkoder.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bezkoder.spring.datajpa.model.Station;
import com.bezkoder.spring.datajpa.repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.datajpa.model.Tutorial;
import com.bezkoder.spring.datajpa.repository.TutorialRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class StationController {

    @Autowired
    StationRepository stationRepository;

    @GetMapping("/stations")
    public ResponseEntity<List<Station>> getAllStations(@RequestParam(required = false) String name) {
        try {
            List<Station> stations = new ArrayList<Station>();

            if (name == null)
                stationRepository.findAll().forEach(stations::add);
            else
                stationRepository.findByName(name).forEach(stations::add);

            if (stations.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(stations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/stations/{id}")
    public ResponseEntity<Station> getStationById(@PathVariable("id") long id) {
        Optional<Station> stationData = stationRepository.findById(id);

        if (stationData.isPresent()) {
            return new ResponseEntity<>(stationData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/stations")
    public ResponseEntity<Station> createStation(@RequestBody Station station) {
        try {
            Station _station = stationRepository
                    .save(new Station(station.getName(), station.getLongitude(), station.getLatitude()));
            return new ResponseEntity<>(_station, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/stations/{id}")
    public ResponseEntity<Station> updateStation(@PathVariable("id") long id, @RequestBody Station station) {
        Optional<Station> stationData = stationRepository.findById(id);

        if (stationData.isPresent()) {
            Station _station = stationData.get();
            _station.setName(station.getName());
            _station.setLongitude(station.getLongitude());
            _station.setLatitude(station.getLatitude());

            return new ResponseEntity<>(stationRepository.save(_station), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/stations/{id}")
    public ResponseEntity<HttpStatus> deleteStationById(@PathVariable("id") long id) {
        try {
            stationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/stations")
    public ResponseEntity<HttpStatus> deleteAllStations() {
        try {
            stationRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}