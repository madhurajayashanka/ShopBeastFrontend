export class AddProductModel{
  constructor(category: { id: number; categoryName: string }, sku: string, name: string, description: string, unitPrice: number, imageUrl: string, active: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date) {
    this.category = category;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.unitsInStock = unitsInStock;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }
  category:{"id":number,"categoryName":string};
  sku:string;
  name:string;
  description:string;
  unitPrice:number;
  imageUrl:string;
  active:boolean;
  unitsInStock:number;
  dateCreated:Date;
  lastUpdated:Date;
}
