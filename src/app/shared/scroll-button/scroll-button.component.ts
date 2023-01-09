import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {

  @Input() targetId = ''
  show = false
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0

  }
  callback(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      if(entry.isIntersecting == false) {
        this.show = true
      } else {
        this.show = false
      }
    })
  }

  observer = new IntersectionObserver(this.callback.bind(this), this.options);

  constructor() { }

  ngOnInit() {
    const target = document.getElementById(this.targetId) as HTMLElement

    this.observer.observe(target)
  }

  upScroll() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

}
