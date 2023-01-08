package ma.pharmacy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
@CrossOrigin
public class UserController {
    @GetMapping("/")
    public String registrationForm() {
        return "user";
    }
    
}
