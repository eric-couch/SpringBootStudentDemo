package com.example.demo.Dao;

import com.example.demo.Entity.*;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Map;
import java.util.HashMap;

@Repository
public class StudentDao {
    private static Map<Integer, Student> students;

    static {
        students = new HashMap<Integer, Student>() {
            {
                put(1, new Student(1, "Omnia", "Math"));
                put(2, new Student(2, "Gulnar", "Computer Science"));
                put(3, new Student(3, "Joshua", "Engineering"));
                put(4, new Student(4, "Derek", "French Poetry"));
            }
        };
        // int[] nums = {5,10,15,20,25};
    }

    public Collection<Student> getAllStudents() {
        return this.students.values();
    }
}
