import { Controller, Get, Post, Put, Delete, Res, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { ProductDTO } from '../../dto/product.dto';
import { ProductUpdateDTO } from '../../dto/product-update.dto';

@Controller()
export class ProductsController {
  constructor(private readonly appService: ProductsService) { }

  @Get('product')
  async getList(): Promise<any> {
    return this.appService.getList();
  }

  @Post('product')
  async newProduct(@Res() res, @Body() createProductDTO: ProductDTO): Promise<any> {
    const product = await this.appService.addProduct(createProductDTO);
    return res.status(HttpStatus.CREATED).json({
      message: "Product has been created successfully",
      product
    });
  }

  @Put('product')
  async updateProduct(@Res() res, @Body() productUpdate: ProductUpdateDTO): Promise<any> {
    const product = await this.appService.updateProduct(productUpdate);
    return res.status(HttpStatus.OK).json({
      message: 'Product has been successfully updated',
      product
    });
  }

  @Delete('product')
  async deleteeleteProduct(@Res() res, @Body() body: any): Promise<any> {    
    const product = await this.appService.deleteProduct(body.id);
        if (!product) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted',
            product
        })
  }
}
