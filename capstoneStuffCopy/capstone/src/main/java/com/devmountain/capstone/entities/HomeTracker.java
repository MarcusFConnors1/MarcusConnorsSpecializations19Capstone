package com.devmountain.capstone.entities;


import com.devmountain.capstone.dtos.HomeTrackerDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "HomeTracker")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HomeTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private int smileyFace;

    @Column
    private boolean firstLetter;

    @Column
    private boolean secondLetter;

    @Column
    private boolean thirdLetter;

    @Column
    private boolean fourthLetter;

    @Column
    private boolean fifthLetter;

    @Column
    private boolean sixthLetter;

    public Long getId() {
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

    public int getSmileyFace() {
        return smileyFace;
    }

    public void setSmileyFace(int smileyFace) {
        this.smileyFace = smileyFace;
    }

    public boolean isFirstLetter() {
        return firstLetter;
    }

    public void setFirstLetter(boolean firstLetter) {
        this.firstLetter = firstLetter;
    }

    public boolean isSecondLetter() {
        return secondLetter;
    }

    public void setSecondLetter(boolean secondLetter) {
        this.secondLetter = secondLetter;
    }

    public boolean isThirdLetter() {
        return thirdLetter;
    }

    public void setThirdLetter(boolean thirdLetter) {
        this.thirdLetter = thirdLetter;
    }

    public boolean isFourthLetter() {
        return fourthLetter;
    }

    public void setFourthLetter(boolean fourthLetter) {
        this.fourthLetter = fourthLetter;
    }

    public boolean isFifthLetter() {
        return fifthLetter;
    }

    public void setFifthLetter(boolean fifthLetter) {
        this.fifthLetter = fifthLetter;
    }

    public boolean isSixthLetter() {
        return sixthLetter;
    }

    public void setSixthLetter(boolean sixthLetter) {
        this.sixthLetter = sixthLetter;
    }

    public HomeTracker(HomeTrackerDto homeTrackerDto) {
        if(homeTrackerDto.getName() != null) {
            this.name = homeTrackerDto.getName();
        }
        this.smileyFace = homeTrackerDto.getSmileyFace();
        this.firstLetter = homeTrackerDto.isFirstLetter();
        this.secondLetter = homeTrackerDto.isSecondLetter();
        this.thirdLetter = homeTrackerDto.isThirdLetter();
        this.fourthLetter = homeTrackerDto.isFourthLetter();
        this.fifthLetter = homeTrackerDto.isFifthLetter();
        this.sixthLetter = homeTrackerDto.isSixthLetter();
    }
}
