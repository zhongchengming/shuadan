package com.example.portal.controller;

import com.example.portal.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("portal/test")
public class TestController {
    @Autowired
    MainService mainService;
    @RequestMapping("/getData")
    public String test (@RequestParam String name){
        String value = mainService.hiService("发送：我是portal");
        return value;
    }
    @RequestMapping("index")
    public String view(){
        return "portal/index";
    }
    @RequestMapping("agreement")
    public String agreement(){
        return "agreement";
    }

}
