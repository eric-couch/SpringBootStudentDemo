package com.example.demo.Controller;

import com.example.demo.Services.StudentService;
import com.example.demo.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/students")  // https://localhost:8080/students
public class StudentController {
    @Autowired
    private StudentService studentService;

    @RequestMapping("/")    // https://localhost:8080/students/
    public Collection<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
