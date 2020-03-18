package com.example.support.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class MainController {
    @RequestMapping("/test")
    public String test (@RequestParam String message){
        return message+"==收到：我是support";
    }
    @RequestMapping("/asa")
    public String asa (){
        return "home";
    }
}
