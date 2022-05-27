package com.devmountain.capstone.services;

import com.devmountain.capstone.dtos.HomeTrackerDto;
import com.devmountain.capstone.entities.HomeTracker;
import com.devmountain.capstone.repositories.HomeTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.Map;
import java.util.Optional;

@Service
public class HomeTrackerServiceImpl implements HomeTrackerService {

    @Autowired
    HomeTrackerRepository homeTrackerRepository;

    HomeTrackerDto homeTrackerDto = new HomeTrackerDto();

    @Override
    public int firstCheck(char firstAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(firstAnswer);
        if(firstAnswer == 'a' || firstAnswer == 'A') {
            System.out.println("Guessed Right!");
            System.out.println(homeTrackerDto.getSmileyFace());
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(homeTrackerDto.getSmileyFace());
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }

    @Override
    public int secondCheck(char secondAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(secondAnswer);
        if(secondAnswer == 'e') {
            System.out.println("Guessed Right!");
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(number);
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }

    @Override
    public int thirdCheck(char thirdAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(thirdAnswer);
        if(thirdAnswer == 's') {
            System.out.println("Guessed Right!");
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(number);
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }

    @Override
    public int fourthCheck(char fourthAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(fourthAnswer);
        if(fourthAnswer == 't') {
            System.out.println("Guessed Right!");
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(number);
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }

    @Override
    public int fifthCheck(char fifthAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(fifthAnswer);
        if(fifthAnswer == 'r') {
            System.out.println("Guessed Right!");
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(number);
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }

    @Override
    public int sixthCheck(char sixthAnswer) {
        int number = homeTrackerDto.getSmileyFace();
        System.out.println(sixthAnswer);
        if(sixthAnswer == 'i') {
            System.out.println("Guessed Right!");
            return number;
        }else{
            int newNumber = (number + 1);
            homeTrackerDto.setSmileyFace(newNumber);
            System.out.println(homeTrackerDto.getSmileyFace());
            System.out.println("Guessed Wrong!");
            return newNumber;
        }
    }
}
