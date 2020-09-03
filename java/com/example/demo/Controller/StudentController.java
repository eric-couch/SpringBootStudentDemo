package com.example.demo.Controller;

import com.example.demo.Services.StudentService;
import com.example.demo.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

    @RequestMapping("/{id}")    // https://localhost:8080/students/1
    public Student getStudentById(@PathVariable("id") int id) {
        return studentService.getStudentById(id);
    }

    @RequestMapping("/deletestudent/{id}") // https://localhost:8080/students/deletestudent/1
    public void deleteStudent(@PathVariable("id") int id) {
        studentService.removeStudentById(id);
    }

    @RequestMapping(value = "/updatestudent/", consumes = MediaType.APPLICATION_JSON_VALUE) // https://localhost:8080/students/updatestudent/1
    public void updateStudent(@RequestBody Student student) {
        studentService.updateStudent(student);
    }
}
