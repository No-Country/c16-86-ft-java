package com.estacsis.Home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {
<<<<<<< Updated upstream
    @GetMapping("/")
=======
    @GetMapping("/index")
>>>>>>> Stashed changes
    public String index() {
        return "Home";
    }

<<<<<<< Updated upstream
    @GetMapping("/error")
=======
    @GetMapping("/errox")
>>>>>>> Stashed changes
    public String error() {
        return "ERROR";
    }
}
