package log.center.data.handler;

import log.center.data.entity.ProductEntity;

public interface ProductDataHandler {
    ProductEntity saveProductEntity(Long productId, String productName, String productCategory, int productPrice, int productStock);

    ProductEntity getProductEntity(Long productId);
}
