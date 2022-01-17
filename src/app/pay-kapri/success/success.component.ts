import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  title: string = "Kapri - Payment Successful";

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Furry Artist, Commissions, Art, NSFW Furry Art, Kaprihorn Commissions, Kaprileak Commissions, Kapri Commissions'},
      {name: 'description', content: 'Payment successful.'},
      {name: 'robots', content: 'noindex'},
      {name: 'image', content: '/assets/img/img_banner.png'}
    ]);
  }

}
