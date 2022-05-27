package com.devmountain.capstone.repositories;

import com.devmountain.capstone.entities.HomeTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeTrackerRepository extends JpaRepository<HomeTracker, Long> {
}
