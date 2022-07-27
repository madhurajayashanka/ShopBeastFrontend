import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Product} from "../common/product";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  private BASE_URL= "http://localhost:8080/api/products";
  private CATEGORY_URL= "http://localhost:8080/api/product-category";

  public searchText=new BehaviorSubject<string>('all');
  currentSearchText = this.searchText.asObservable();
  searchKeyword:string;

  constructor(private httpClient:HttpClient) { }

  getProductListPaginate(thePage:number,
                         thePageSize:number,
                         theCategoryId:number)
    :Observable<GetResponseProduct>{
    const searchUrl = `${this.BASE_URL}/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProduct>(searchUrl);
  }

  searchProductPaginate(thePage:number,
                         thePageSize:number,
                         theKeyword:string)
    :Observable<GetResponseProduct>{
    const searchUrl = `${this.BASE_URL}/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProduct>(searchUrl);
  }


  getProductCategories():Observable<ProductCategory[]>{
    return this.httpClient.get<GetResponseProductCategory>
    (this.CATEGORY_URL ).pipe(
      map(response=>response._embedded.productCategory)
    );
  }

  setSearchText(searchText:string){
    this.searchText.next(searchText);
  }

  ngOnInit(): void {
    this.currentSearchText.subscribe(result=>{
      this.searchKeyword=result;
    })
  }

  getProduct(theProductId: number):Observable<Product> {
    const productUrl=`${this.BASE_URL}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }
}

interface GetResponseProduct{
  _embedded:{
    products:Product[];
  },
  page : {
    size : number,
    totalElements : number,
    totalPages : number,
    number : number
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}
