package com.bezkoder.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bezkoder.spring.datajpa.model.Station;
import com.bezkoder.spring.datajpa.model.Trip;
import com.bezkoder.spring.datajpa.repository.StationRepository;
import com.bezkoder.spring.datajpa.repository.TripRepository;
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

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class TripController {

    @Autowired
    TripRepository tripRepository;

    @GetMapping("/trips")
    public ResponseEntity<List<Trip>> getAllStations(@RequestParam(required = false) String name) {
        try {
            List<Trip> trips = new ArrayList<Trip>();

            if (name == null)
                tripRepository.findAll().forEach(trips::add);
            else
                tripRepository.findById(name).forEach(trips::add);

            if (trips.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(trips, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/trips/{id}")
    public ResponseEntity<Trip> getStationById(@PathVariable("id") long id) {
        Optional<Trip> tripData = tripRepository.findById(id);

        if (tripData.isPresent()) {
            return new ResponseEntity<>(tripData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/trips")
    public ResponseEntity<Trip> createStation(@RequestBody Trip trip) {
        try {
            Trip _trip = tripRepository
                    .save(new Trip(trip.getStartTime(),trip.getEndTime(),trip.getFromStation(),trip.getToStation()));
            return new ResponseEntity<>(_trip, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/trips/{id}")
    public ResponseEntity<Trip> updateTrip(@PathVariable("id") long id, @RequestBody Trip trip) {
        Optional<Trip> tripData = tripRepository.findById(id);

        if (tripData.isPresent()) {
            Trip _trip = tripData.get();
            _trip.setStartTime(trip.getStartTime());
            _trip.setEndTime(trip.getEndTime());
            _trip.setFromStation(trip.getFromStation());
            _trip.setToStation(trip.getToStation());

            return new ResponseEntity<>(tripRepository.save(_trip), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/trips/{id}")
    public ResponseEntity<HttpStatus> deleteTripById(@PathVariable("id") long id) {
        try {
            tripRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/trips")
    public ResponseEntity<HttpStatus> deleteAllTrips() {
        try {
            tripRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }




}
