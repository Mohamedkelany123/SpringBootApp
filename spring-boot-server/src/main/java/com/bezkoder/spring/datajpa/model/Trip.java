package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Trip")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @Column(name = "startTime")
    private Date startTime;

    @Column(name = "endTime")
    private Date endTime;

    @ManyToOne
    @JoinColumn(name="toStationId")
    private Station fromStation;



    @ManyToOne
    @JoinColumn(name="fromStationId")
    private Station toStation;

    //private long toStationId;

    public Trip() {}

    public Trip(Date startTime, Date endTime, Station fromStation,Station toStation) {
        this.startTime=startTime;
        this.endTime=endTime;
        this.fromStation=fromStation;
        this.toStation=toStation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Station getFromStation() {
        return fromStation;
    }

    public void setFromStation(Station fromStation) {
        this.fromStation = fromStation;
    }

    public Station getToStation() {
        return toStation;
    }

    public void setToStation(Station toStation) {
        this.toStation = toStation;
    }

@Override
public String toString() {
    return "Trip [id=" + id + ", startTime=" + startTime + ", endTime=" + endTime + ", fromStation=" + fromStation.getName() +", toStation="+ toStation.getName() +  "]";
}
}
