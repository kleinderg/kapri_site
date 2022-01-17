import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent implements OnInit {
  title: string = "Kapri - Payment Failed";

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Furry Artist, Commissions, Art, NSFW Furry Art, Kaprihorn Commissions, Kaprileak Commissions, Kapri Commissions'},
      {name: 'description', content: 'Payment failed.'},
      {name: 'robots', content: 'noindex'},
      {name: 'image', content: '/assets/img/img_banner.png'}
    ]);
  }

}
