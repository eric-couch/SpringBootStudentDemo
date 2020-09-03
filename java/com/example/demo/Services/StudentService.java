package com.example.demo.Services;

import com.example.demo.Dao.StudentDao;
import com.example.demo.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class StudentService {
    @Autowired
    private StudentDao studentDao;

    public Collection<Student> getAllStudents() {
        return studentDao.getAllStudents();
    }
}
