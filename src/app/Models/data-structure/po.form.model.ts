export class PoFormModel {
  PomDocType: string = "DIRECT";
  PomDlvBy: string = "DATE";
  PomShpMode: string = "ROAD";
  PomShpDlvDate: string = "5/30/2025";
  PoDetails: any[] = [
   {
  PodId: 1748,
  PodRowNo: 1,
  PodItmId: 71618,
  PodQty: 1,
  PodUntId: 1,
  PodUnitFactor: 1,
  PodBaseQty: 1,
  PodAcessAmt: 0,
  PodBaseUntId: 1,
  PodBatchNo: "as",
  PodCessAmt: 0,
  PodCgstAmt: 90.01,
  PodDisAmt: 0,
  PodDisAmt1: 0,
  PodDisAmt2: 0,
  PodDisAmt3: 0,
  PodDisAmt4: 0,
  PodDisCalcOn1: 1000.10,
  PodDisCalcOn2: 1000.10,
  PodDisCalcOn3: 1000.10,
  PodDisCalcOn4: 1000.10,
  PodDisRate1: 0,
  PodDisRate2: 0,
  PodDisRate3: 0,
  PodDisRate4: 0,
  PodDisType1: "%",
  PodDisType2: "%",
  PodDisType3: "%",
  PodDisType4: "%",
  PodExpAmt: 0,
  PodExpDate: null,
  PodExpirable: false,
  PodFocQty: 0,
  PodGrossAmt: 1000.10,
  PodGstAmt: 180.02,
  PodGstCode: "GST18",
  PodGstId: 3,
  PodGstRate: 18,
  PodIgstAmt: 0,
  PodItmCode: "399",
  PodItmDateFormat: "MM/YYYY",
  PodItmExpirable: false,
  PodItmMaxDisc: 0,
  PodItmName: "UNSPECIFIED ITEM",
  PodItmPkgType: "Packed",
  PodItmPriceMethod: "Fixed",
  PodItmPurUnit: "Base Unit",
  PodItmType: "FINISHED",
  PodMfgDate: null,
  PodMrp: 100.01,
  PodNetAmt: 1180.12,
  PodOtherGstAmt: 0,
  PodPack: "SO-399",
  PodPomMkey: 632,
  PodPrice: 1000.10,
  PodRate: 1000.10,
  PodRateUntId: 1,
  PodRemarks: "",
  PodRjcQty: 0,
  PodRowType: "I",
  PodSaleable: false,
  PodSgstAmt: 90.01,
  PodShtQty: 0,
  PodTaxableAmt: 1000.10,
  PodType: "A",
  PodUntCode: "PCS",
  isEnable: true,
  isTempAdd: "Y"
}

  ];
  PomAcmId: number = 447;
  PomAcmName: string = "MUMBAI BRANCH";
  PomAddUser: string = "Ayush";
  PomAdvAmt: number = 0;
  PomAllowBackDate: boolean = false;
  PomBillDisAmt: number = 0;
  PomBillDisRate: number = 0;
  PomBillDisType: string = "%";
  PomBrnId: number = 86;
  PomBtpCode: string = "PO";
  PomCBrnId: number = 4;
  PomCmpId: number = 1;
  PomCpEmail: string = "panwarkanu2001@gmail.com";
  PomCpMobileNo: string = "8817529856";
  PomCpName: string = "gfg";
  PomDlvAddress1: string = "Rajpur Rd; Opposite Osho; Chander Lok Colony; Hathibarkala Salwala";
  PomDlvAddress2: string = "";
  PomDlvAddtype: string = "";
  PomDlvCntId: number = 96;
  PomDlvCtyId: number = 71;
  PomDlvDate: string = "5/13/2025";
  PomDlvGstIn: string = "";
  PomDlvKeyperson: string = "";
  PomDlvLocation: string = "";
  PomDlvMobileNo: string = "";
  PomDlvPinCode: string = "248002";
  PomDlvStaId: number = 5;
  PomDocNo: string = "4545454";
  PomEmpId: number = 0;
  PomFyrId: number = 25;
  PomGstAmt: number = 0.18;
  PomGstType: string = "ITC-GOODS";
  PomInterState: string = "Y";
  PomIsVdateAuto: boolean = false;
  PomIsVtypeAuto: boolean = false;
  PomLcDate: string = "5/30/2025";
  PomLcExpDate: string = "5/30/2025";
  PomLcTerms: number = 0;
  PomLogId: number = 157606;
  PomMkey: string = "";
  PomNavId: number = 182411;
  PomNetAmt: number = 1.18;
  PomOtherAmt: number = 0;
  PomPayMethod: string = "CREDIT";
  PomPayTerms: number = 0;
  PomPos: string = "05";
  PomQty: number = 1;
  PomRefDate: string = "5/30/2025";
  PomShpAcmCode: string = "";
  PomShpBrnId: number = 86;
  PomShpBrnName: string = "";
  PomShpType: string = "Branch";
  PomShpWrhCode: string = "";
  PomShpWrhId: number = 0;
  PomStsCode: number = 1;
  PomTId: string = "PO1748583395517";
  PomTaxableAmt: number = 1;
  PomTerms: string = "";
  PomType: string = "Transfer";
  PomVdate: string = "5/30/2025";
  PomVnoPrefix: string = "DD0525POV";
  PomVnoSeq: number = 0;
  PomVtpAccTypes: string = "2;1;3";
  PomVtpAutoFillDoc: boolean = false;
  PomVtpUseSeparator: string = "N";
  PomVtype: string = "POV";
  PomWrhId: number = 8;
  RefDoc: any = null;
}

export class SearchVendorModel {
  Search: string = "";
  EmpId: number | null = null;
  ActIds: number[] = [2, 1, 3];
  BtpId: number = 0;
  SearchType: string = "";
  SearchColumn?: string; 
  AcgGroups?: string;    
  AcgCategorys: string = "";
  MaxRecord: number = 100;
  AcgIds: string = "";
}


