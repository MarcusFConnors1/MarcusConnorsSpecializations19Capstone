package com.devmountain.capstone.controllers;


import com.devmountain.capstone.dtos.HomeTrackerDto;
import com.devmountain.capstone.dtos.Result;
import com.devmountain.capstone.services.HomeTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public/home")
public class HomeTrackerController {
    @Autowired
    HomeTrackerService homeTrackerService;

    HomeTrackerDto homeTrackerDto = new HomeTrackerDto();


    @PutMapping("/letters/1/{firstAnswer}")
    public int firstCheck(@PathVariable char firstAnswer){
        System.out.println(firstAnswer);
        return homeTrackerService.firstCheck(firstAnswer);
    }

    @PutMapping("/letters/2/{secondAnswer}")
    public int secondCheck(@PathVariable char secondAnswer){
        System.out.println(secondAnswer);
        System.out.println("test");
        return homeTrackerService.secondCheck(secondAnswer);

    }

    @PutMapping("/letters/3/{thirdAnswer}")
    public int thirdCheck(@PathVariable char thirdAnswer){
        System.out.println(thirdAnswer);
        return homeTrackerService.thirdCheck(thirdAnswer);
    }

    @PutMapping(path = "/letters/4/{fourthAnswer}", produces = "application/json")
    public ResponseEntity<Result> fourthCheck(@PathVariable char fourthAnswer){
        System.out.println(fourthAnswer);
        Result result = new Result(homeTrackerService.fourthCheck(fourthAnswer));
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping("/letters/5/{fifthAnswer}")
    public int fifthCheck(@PathVariable char fifthAnswer){
        System.out.println(fifthAnswer);
        return homeTrackerService.fifthCheck(fifthAnswer);
    }

    @PutMapping("/letters/6/{sixthAnswer}")
    public int sixthCheck(@PathVariable char sixthAnswer){
        System.out.println(sixthAnswer);
        return homeTrackerService.sixthCheck(sixthAnswer);
    }

    @GetMapping("/letters/2")
    public int sendNumber() {
        return homeTrackerDto.getSmileyFace();
    }

    @GetMapping("/letters/3")
    public int sendNumberThree() {
        return homeTrackerDto.getSmileyFace();
    }
}
