package log.center.controller;

import log.center.data.dto.ProductDto;
import log.center.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/product-api")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/product/{productId}")
    public ProductDto getProduct(@PathVariable Long productId){
        return productService.getProduct(productId);
    }

    @GetMapping("/products")
    public List<ProductDto> getAllProduct(){
        return productService.getAllProduct();
    }

    @PostMapping("/product")
    public ProductDto createProduct(@RequestBody ProductDto productDto) {
        Long ProductId = productDto.getProductId();
        String productName = productDto.getProductName();
        String productCategory = productDto.getProductCategory();
        int productPrice = productDto.getProductPrice();
        int productStock = productDto.getProductStock();

        return productService.saveProduct(ProductId, productName, productCategory, productPrice,productStock);
    }
    @DeleteMapping("/product/{productId}")
    public Long deleteProduct(@PathVariable Long productId) {

        return productService.deleteProduct(productId);
    }


}
