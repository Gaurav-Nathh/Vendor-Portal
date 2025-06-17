import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseList } from '../../Models/data-structure/po.model';
import { PoFormModel, SearchVendorModel } from '../../Models/data-structure/po.form.model';

@Injectable({
  providedIn: 'root'
})
export class PoServiceFileService {
  poList:any=new PurchaseList();
  poForm:any= new PoFormModel();
  poVendor:any= new SearchVendorModel();

  private apiUrl="https://efactoapidevelopment.efacto.cloud/api"
  private authCode='140-9299-524-TEST'
  constructor(private http: HttpClient) { }

 getPOList(purchaseList: PurchaseList): Observable<any> {
  let params = new HttpParams();
    Object.keys(purchaseList).forEach(key => {
      const value = (purchaseList as any)[key];
      if (value !== undefined && value !== null) {
        params = params.set(key, value.toString());
      }
    });

  const headers = new HttpHeaders({
    'code': this.authCode
  });

return this.http.get(`${this.apiUrl}/PO/GetPOList`, { headers, params });

}

/* postPoForm(PoFormModel: PoFormModel) {
  let params = new HttpParams(); // Declare params before use

  Object.keys(PoFormModel).forEach(key => {
    const value = (PoFormModel as any)[key];
    if (value !== undefined && value !== null) {
      params = params.set(key, value.toString());
    }
  });

  const headers = new HttpHeaders({
    'code': this.authCode
  });

  return this.http.post(`${this.apiUrl}/PO`, null, { headers, params });
} */

  postPoForm(PoFormModel: PoFormModel) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'code': this.authCode // Include any custom headers required by the API
  });

  return this.http.post(`${this.apiUrl}/PO`, PoFormModel, { headers });
}

getVendor(PoVendorModel: SearchVendorModel) {
  const headers = new HttpHeaders({
    'code': this.authCode
  });

  const params = new HttpParams({ fromObject: { 
    Search: PoVendorModel.Search,
    EmpId: PoVendorModel.EmpId?.toString() ?? '',
    BtpId: PoVendorModel.BtpId.toString(),
    SearchType: PoVendorModel.SearchType,
    SearchColumn: PoVendorModel.SearchColumn ?? '',
    AcgGroups: PoVendorModel.AcgGroups ?? '',
    AcgCategorys: PoVendorModel.AcgCategorys,
    MaxRecord: PoVendorModel.MaxRecord.toString(),
    AcgIds: PoVendorModel.AcgIds,
    ActIds: PoVendorModel.ActIds.join(',')  // Assuming the API expects CSV
  }});

  return this.http.get(`${this.apiUrl}/Acm/GetAccountSearchList`, { headers, params });
}



}
