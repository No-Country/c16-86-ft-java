package com.estacsis.Home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {
    @GetMapping("/")
    public String index() {
        return "Home";
    }

    @GetMapping("/error")
    public String error() {
        return "ERROR";
    }
}
