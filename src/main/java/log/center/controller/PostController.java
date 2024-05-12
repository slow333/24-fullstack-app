package log.center.controller;

import log.center.data.dto.MemberDTO;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/post-api")
@CrossOrigin("*")
public class PostController {

    @PostMapping("/default")
    public String postMethod() {
        return "default value no request values";
    }

    @PostMapping("/member")
    public String postMember( @RequestBody Map<String, Object> memberData) {
        StringBuilder sb = new StringBuilder();

        memberData.forEach((key, value) -> sb.append(("key :" + key + " , value : " + value + "\n")
        ));
        return sb.toString();
    }
    @PostMapping("/member-dto")
    public String postMember2(@RequestBody MemberDTO memberDTO) {
        return memberDTO.toString();
    }
}
