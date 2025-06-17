import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoServiceFileService } from '../../../services/po-service/po-service-file.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-po-dashboard',
  standalone:true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './po-dashboard.component.html',
  styleUrl: './po-dashboard.component.scss',
 
})
export class PoDashboardComponent {
/*   viewOptions = [
    { label: 'Show All', value: 'all' },
    { label: 'Billed', value: 'billed' },
    { label: 'Open', value: 'open' },
  ]; */

  currentView = 'all';
  filteredOrders: any[] = [];
    allOrders: any[] = [];
      
  dropdownLabel = 'Select an option';
  selectedItem = '';
  isDropdownOpen:boolean = false;
  isFilterOpen:boolean=false;
  

   datedrp = ['voucher Date','Edited Date','Created Date'];
  selecteddrp = 'voucher Date';


  customFromDate: string = '';
customToDate: string = '';
 selectedStatus: number|null=null;

typdrp = [
  { label: 'All', value: 'all' },
  { label: 'Number', value: 'Vno' },
  { label: 'Type', value: 'Type' },
  { label: 'Vendor', value: 'Acmname' },
  { label: 'Ref No.', value: 'Billno' },
  { label: 'Qty', value: 'Qty' },
  { label: 'Amount', value: 'Amt' }
];

  statusOptions = [
  { label:'Draft',value:0},
  {label:'Confirm',value:1},
  {label:'Cancel',value:2},
  {label:'Hold',value:5},
  {label:'Release',value:6},
  {label:'Approve',value:8},
  {label:'On Approval',value:12}
]


selectedtypdrp = 'all';




  constructor(private poService: PoServiceFileService) {

  }
  ngOnInit(): void {
this.updateList()
  
  }

 onStatusChange() {
    
    this.poService.poList.StatusCode=this.selectedStatus
    console.log( this.poService.poList.StatusCode);
  }

applyDateRange(){
  this.poService.poList.FromDate=this.customFromDate;
  this.poService.poList.ToDate=this.customToDate;
  this.updateList()

}
closeDropdown(){
  this.isDropdownOpen = false;
}

updateList():void{
  this.poService.getPOList(this.poService.poList).subscribe({
    next: (res: any) => {
      console.log('API response:', res);
      this.allOrders = res.PO || [];
      this.filteredOrders = [...this.allOrders];
    },
    error: (err) => {
      console.error('API Error:', err);
    }
  });
}

updateView(view: string): void {
  this.currentView = view;
  this.filteredOrders = this.allOrders.filter((po) =>
    view === 'all' ? true : po.status.toLowerCase() === view
  );
}
 

  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
    

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleFilterbtn(){
    this.isFilterOpen = !this.isFilterOpen;
    
  }

  
  selectItem(item: string): void {
    this.selectedItem = item;
    this.dropdownLabel = item;
    this.isDropdownOpen = false;
  }

  onDateOptionChange() {
    
    this.poService.poList.SearchColumn=this.selecteddrp
  
}

selectPeriod(period: string): void {
  // Handle period selection

  this.poService.poList.PeriodType=period;
  this.dropdownLabel = period;
  this.updateList()
  this.isDropdownOpen = false;
  // Add your logic here
  
}

searchQuery = '';
filters = [
  { name: 'All', active: true },
  { name: 'Recent', active: false },
  { name: 'Custom', active: false }
];

toggleFilter(filter: any) {
  this.filters.forEach(f => f.active = false);
  filter.active = true;
  // Add your filter logic here
}
onTypeChange():void{
  console.log("hiii")
  this.poService.poList.SearchColumn=this.selectedtypdrp;
  this.updateList()
}
}
