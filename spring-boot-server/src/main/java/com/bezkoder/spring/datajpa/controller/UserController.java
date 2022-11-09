package com.bezkoder.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bezkoder.spring.datajpa.model.Station;
import com.bezkoder.spring.datajpa.model.User;
import com.bezkoder.spring.datajpa.repository.StationRepository;
import com.bezkoder.spring.datajpa.repository.UserRepository;
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
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        try {
            User _user = userRepository
                    .save(new User(user.getUserName(),user.getPassword()));
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getAdmin(@RequestParam(required = false) String name) {
        try {
            List<User> users = new ArrayList<User>();

            userRepository.findAll().forEach(users::add);

            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getStationById(@PathVariable("id") long id) {
        Optional<User> userData = userRepository.findById(id);

        if (userData.isPresent()) {
            return new ResponseEntity<>(userData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @PostMapping("/user/signIn")
//    public ResponseEntity<Boolean> signIn(@RequestBody User user) {
//        try {
//                User signInUser=userRepository.findByName(user.getUserName());
//                if(signInUser==null)
//                    return new ResponseEntity<>(false, HttpStatus.OK);
//                else if(signInUser.getPassword()!=user.getPassword())
//                    return new ResponseEntity<>(false, HttpStatus.OK);
//                else{
//                    signInUser.setSignedIn(true);
//                    return new ResponseEntity<>(signInUser.isSignedIn(), HttpStatus.OK);
//                }
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @PutMapping("/user/signIn")
    public ResponseEntity<Boolean> userSignIn(@RequestBody User user) {
        try {
            User userSignIn=userRepository.findByName(user.getUserName());
            userSignIn.setSignedIn(true);
            userRepository.save(userSignIn);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }



}