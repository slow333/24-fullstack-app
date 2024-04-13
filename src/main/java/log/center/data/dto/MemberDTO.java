package log.center.data.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
 public class MemberDTO {
    private String name;
    private String email;
    private Integer id;
    private String com;
    private String memo;
}