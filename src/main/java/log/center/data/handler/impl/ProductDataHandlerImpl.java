package log.center.data.handler.impl;

import jakarta.transaction.Transactional;
import log.center.data.dao.ProductDao;
import log.center.data.entity.ProductEntity;
import log.center.data.handler.ProductDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductDataHandlerImpl implements ProductDataHandler {

    ProductDao productDao;

    @Autowired
    public ProductDataHandlerImpl(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public ProductEntity saveProductEntity(Long productId, String productName, String productCategory, int productPrice, int productStock) {

        ProductEntity productEntity = new ProductEntity(productId, productName, productCategory, productPrice, productStock);

        return productDao.saveProduct(productEntity);
    }

    @Override
    public ProductEntity getProductEntity(Long productId) {

        return productDao.getProduct(productId);
    }
}
