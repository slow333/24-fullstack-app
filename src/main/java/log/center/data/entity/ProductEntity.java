package log.center.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import log.center.data.dto.ProductDto;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "product")
public class ProductEntity {
    @Id
    Long productId;

    String productName;
    String productCategory;
    Integer productPrice;
    Integer productStock;

/*    public ProductDto toDto() {
        return ProductDto.builder()
                .productId(productId)
                .productName(productName)
                .productCategory(productCategory)
                .productPrice(productPrice)
                .productStock(productStock)
                .build();
    }*/
}
