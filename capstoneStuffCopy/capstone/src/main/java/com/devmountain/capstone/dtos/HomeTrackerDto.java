package com.devmountain.capstone.dtos;


import com.devmountain.capstone.entities.HomeTracker;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HomeTrackerDto implements Serializable {
    private Long id;
    private String name;
    private int smileyFace;
    private boolean firstLetter;
    private boolean secondLetter;
    private boolean thirdLetter;
    private boolean fourthLetter;
    private boolean fifthLetter;
    private boolean sixthLetter;

    public HomeTrackerDto(HomeTracker homeTracker) {
        if(homeTracker.getId() != null) {
            this.id = homeTracker.getId();
        }
        if(homeTracker.getName() != null) {
            this.name = homeTracker.getName();
        }
        this.smileyFace = homeTracker.getSmileyFace();
        this.firstLetter = homeTracker.isFirstLetter();
        this.secondLetter = homeTracker.isSecondLetter();
        this.thirdLetter = homeTracker.isThirdLetter();
        this.fourthLetter = homeTracker.isFourthLetter();
        this.fifthLetter = homeTracker.isFifthLetter();
        this.sixthLetter = homeTracker.isSixthLetter();
    }
}
