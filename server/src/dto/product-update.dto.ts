export class ProductUpdateDTO {
    readonly id: string;
    readonly name: string;
    readonly cost_per_unit: number;
    readonly selling_price_per_unit: number;
    readonly units_available: number;
}