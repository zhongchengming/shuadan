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
    @RequestMapping("/test")
    public String test (@RequestParam String name){
        String value = mainService.hiService("发送：我是portal");
        return value;
    }
    @RequestMapping("index")
    public String view(){
        return "test";
    }
    @RequestMapping("agreement")
    public String agreement(){
        return "agreement";
    }


}
