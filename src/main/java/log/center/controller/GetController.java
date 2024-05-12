package log.center.controller;

import log.center.data.dto.MemberDTO;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/get-api")
public class GetController {

    @RequestMapping(value = "/name", method = RequestMethod.GET)
    public String getName() {
        return "RequestMapping : 나는 김입니다";
    }

    @GetMapping("/hello")
    public String hello() {
        return "GetMapping : hello 안녕하세요.";
    }

    @GetMapping("/variable1/{variable}")
    public String getVariable1(@PathVariable String variable){
        return variable;
    }

    // 변수 이름을 변경해서 사용하기
    @GetMapping("/variable2/{variable}")
    public String getVariable2(@PathVariable("variable") String var){
        return var;
    }

    // /request-param?name=okme&email=kalpa@gmail.com
    @GetMapping("/request-param")
    public String getRequestParam1(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String memo )
    {
        return "{name : " + name + ", email : " + email + ",memo: " + memo +"}";
    }
    // /request-param?name=okme&email=kalpa@gmail.com&key1=029&key2=2904&key...
    @GetMapping("/request-param-map")
    public String getRequestParam2(
            @RequestParam Map<String, String> param  ){
        StringBuilder sb = new  StringBuilder();
        param.forEach((key, value) ->
                sb.append("key : " + key + ", value : " + value + "\n"));
        return sb.toString();
    }

    @GetMapping("/request-param-dto")
    public String getRequestParamDto(MemberDTO memberDTO) {
        return memberDTO.toString();
//        return memberDTO.getEmail() + memberDTO.getName() + "id : " + memberDTO.getId();
    }
}

