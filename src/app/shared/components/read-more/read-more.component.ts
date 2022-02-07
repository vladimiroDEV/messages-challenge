import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  @Input() text: string = '';
  // maximum height of the container
  @Input() maxBoxHeight: number = 65;

  collapsedText: boolean = false;
  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let currentHeight =
      this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
    if (currentHeight > this.maxBoxHeight) {
      this.collapsedText = true;
    }
    // trigger detection
    this.cdRef.detectChanges();
  }

  collapseText(): void {
    //  expand text box  and remove cta "Read More"
    this.collapsedText = false;
  }
}
