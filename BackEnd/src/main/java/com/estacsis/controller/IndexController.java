package com.estacsis.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @GetMapping("/error")
    public String error(){
        return "SURGIO UN ERROR";
    }
    @GetMapping("/")
    public String welcome(){
        return "pagina principal";
    }
}
