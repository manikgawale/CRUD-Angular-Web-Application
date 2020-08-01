import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navLinks: any;
  activeLinkIndex = -1;
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.navLinks = [
      {
          label: 'Home',
          link: './home',
          index: 0,
          isActive: true
      }, {
          label: 'Employees',
          link: './employeeList',
          index: 1,
          isActive: false
      } 
    ];
  }
  
  changeTab(tab : any) : void{
    this.navigateTo(tab.link);
    this.setActiveTab(tab.index);
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  public ngAfterViewInit() {
    this.navigateTo('./home');
    this.setActiveTab(0);
  }

  navigateTo(uri : string) : void {
    this.router.navigate([uri], {relativeTo : this.route});
  }

  setActiveTab(index : number) : void {
    this.navLinks.every(function(tab : any){
      tab.isActive = false;
    });
    const tab  = this.navLinks[index];
    tab.isActive = true;
  }
}
