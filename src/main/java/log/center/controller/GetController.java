package log.center.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/get-api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "hello 안녕하세요.";
    }
}
