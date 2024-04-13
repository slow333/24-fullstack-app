package log.center.data.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private Long productId;

    private String productName;
    private String productCategory;
    private int productPrice;
    private int productStock;
}
