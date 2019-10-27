import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  doReorder(event: any){
    console.log('Um item foi alterado')
    event.detail.complete()
  }
}
