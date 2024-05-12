package log.center.service.impl;

import log.center.data.dao.ProductDao;
import log.center.data.dto.ProductDto;
import log.center.data.entity.ProductEntity;
import log.center.data.handler.ProductDataHandler;
import log.center.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    ProductDao productDao;

    @Autowired
    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public ProductDto getProduct(Long productId) {
        ProductEntity productEntity = productDao.getProduct(productId);
      return new ProductDto(
                productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductCategory(),
                productEntity.getProductPrice(),
                productEntity.getProductStock());
    }

    @Override
    public ProductDto saveProduct(Long productId, String productName, String productCategory, int productPrice, int productStock) {
        ProductEntity productEntityToSave = new ProductEntity(productId, productName, productCategory, productPrice, productStock);
        ProductEntity productEntity = productDao.saveProduct(productEntityToSave);

      return new ProductDto(
                productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductCategory(),
                productEntity.getProductPrice(),
                productEntity.getProductStock());
    }

    @Override
    public List<ProductDto> getAllProduct() {
        List<ProductEntity> listEntity = productDao.getAllProduct();

        List<ProductDto> listDto = listEntity
                .stream()
                .map(productEntity ->
                     new ProductDto(productEntity.getProductId(),
                                productEntity.getProductName(),
                                productEntity.getProductCategory(),
                                productEntity.getProductPrice(),
                                productEntity.getProductStock())
                ).collect(Collectors.toList());
        return listDto;
    }

    @Override
    public Long deleteProduct(Long productId) {
        productDao.deleteProduct(productId);
        return productId;
    }

/*    ProductDataHandler productDataHandler;

    @Autowired
    public ProductServiceImpl(ProductDataHandler productDataHandler) {
        this.productDataHandler = productDataHandler;
    }

    @Override
    public ProductDto getProduct(Long productId) {
        ProductEntity productEntity = productDataHandler.getProductEntity(productId);
        ProductDto productDto = new ProductDto(productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductCategory(),
                productEntity.getProductPrice(),
                productEntity.getProductStock());
        return productDto;
    }

    @Override
    public ProductDto saveProduct(Long productId, String productName, String productCategory, int productPrice, int productStock) {

        ProductEntity productEntity = productDataHandler.saveProductEntity(productId, productName, productCategory, productPrice, productStock);

        ProductDto productDto = new ProductDto(productEntity.getProductId(),
                productEntity.getProductName(),
                productEntity.getProductCategory(),
                productEntity.getProductPrice(),
                productEntity.getProductStock());
        return productDto;
    }*/
}
