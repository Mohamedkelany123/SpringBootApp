package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Station")
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "latitude")
    private String latitude;

    @OneToMany(mappedBy="fromStation",fetch=FetchType.EAGER)
    private Set<Trip> fromTrip= new HashSet<Trip>();

    @OneToMany(mappedBy="toStation",fetch=FetchType.EAGER)
    private Set<Trip> toTrip= new HashSet<Trip>();

    public Station() {
    }

    public Station(String name, String longitude, String latitude) {
        this.name=name;
        this.latitude=latitude;
        this.longitude=longitude;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

//    public Set<Trip> getFromTrip() {
//        return fromTrip;
//    }

    public void setFromTrip(Set<Trip> fromTrip) {
        this.fromTrip = fromTrip;
    }

//    public Set<Trip> getToTrip() {
//        return toTrip;
//    }

    public void setToTrip(Set<Trip> toTrip) {
        this.toTrip = toTrip;
    }

    @Override
    public String toString() {
        return "Trip [id=" + id + ", name=" + name + ", longitude=" + longitude + ", latitude=" + latitude+  "]";
    }
}
