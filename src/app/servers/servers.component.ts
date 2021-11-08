import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
// selector: '.app-servers',
templateUrl : './servers.component.html',
  /* template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus='No Server Created';
serverName='Default Server';
userName='';
allowUserName = false;
createServerName=false;
servers=['Testing1','Testing2'];
  constructor() {


  setTimeout(() => {
  this.allowNewServer = true;
  },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
  this.createServerName = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='Server was created'+'with Name as '+ this.serverName;
}

onUpdateServerName(event: any){
this.serverName= (<HTMLInputElement>event.target).value;

}

onClickUserName(){
this.userName= '';
}

}
