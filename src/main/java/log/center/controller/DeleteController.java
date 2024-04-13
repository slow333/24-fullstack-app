package log.center.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/get-api")
@CrossOrigin("*")
public class DeleteController {

    @DeleteMapping("/delete/{variable}")
    public String deleteMember(@PathVariable String variable) {
        return variable;
    }
}
