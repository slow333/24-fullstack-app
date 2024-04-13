package log.center.service;

import log.center.data.dto.ProductDto;

import java.util.List;

public interface ProductService {

    ProductDto getProduct(Long productId);
    ProductDto saveProduct(Long productId, String productName, String productCategory, int productPrice, int productStock);
    List<ProductDto> getAllProduct();
    Long deleteProduct(Long productId);
}
