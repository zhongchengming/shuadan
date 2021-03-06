package com.example.portal.controller;

import com.example.portal.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("portal")
public class MainControler {
    @Autowired
    MainService mainService;
    @RequestMapping("index")
    public String index(){
        return "portal/index";
    }
    @RequestMapping("/")
    public String toindex(){
        return "portal/index";
    }

}
