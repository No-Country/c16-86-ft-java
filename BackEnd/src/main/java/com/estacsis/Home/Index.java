package com.estacsis.Home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {
    @GetMapping("/index")
    public String index() {
        return "Home";
    }

    @GetMapping("/errox")
    public String error() {
        return "ERROR";
    }
}
