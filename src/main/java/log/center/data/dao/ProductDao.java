package log.center.data.dao;

import log.center.data.entity.ProductEntity;

import java.util.List;

public interface ProductDao {
    ProductEntity getProduct(Long productId);
    ProductEntity saveProduct(ProductEntity productEntity);
    List<ProductEntity> getAllProduct();
    void deleteProduct(Long productId);

}
