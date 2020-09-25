import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDTO } from '../dto/product.dto';
import { ProductUpdateDTO } from '../dto/product-update.dto';
import { Product } from '../interfaces/product.interface';


@Injectable()
export class AppService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }
  async getList(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async addProduct(createProductDTO: ProductDTO): Promise<Product> {
    const newProduct = await new this.productModel(createProductDTO);
    return newProduct.save();
  }

  async deleteProduct(_id: string): Promise<Product> {
    const deletedCustomer = await this.productModel.findByIdAndRemove(_id);
    return deletedCustomer;
  }

  async updateProduct(productUpdate: ProductUpdateDTO): Promise<Product> {
    const newProduct: ProductDTO = {
      name: productUpdate.name,
      cost_per_unit: productUpdate.cost_per_unit,
      selling_price_per_unit: productUpdate.selling_price_per_unit,
      units_available: productUpdate.units_available
    }
    const updatedProduct = await this.productModel.findByIdAndUpdate(productUpdate.id, newProduct, { new: true });
    return updatedProduct;
  }
}
