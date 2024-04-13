package log.center.controller;

import log.center.data.dto.MemberDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/put-api")
@CrossOrigin("*")
public class PutController {

    @PutMapping("/default")
    public String postMethod() {
        return "default value for put controller";
    }

    @PutMapping("/member")
    public String postMember( @RequestBody Map<String, Object> memberData) {

        StringBuilder sb = new StringBuilder();
        memberData.forEach((key, value) -> sb.append(("key :" + key + " , value : " + value + "\n")
        ));
        return sb.toString();
    }
    @PutMapping("/member-dto")
    public String postMember2(@RequestBody MemberDTO memberDTO) {
        return memberDTO.toString();
    }
    @PutMapping("/member-dto-response")
    public ResponseEntity<MemberDTO> postMember3(@RequestBody MemberDTO memberDTO) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(memberDTO);
    }
}
