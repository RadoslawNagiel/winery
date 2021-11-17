import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-text-info",
  templateUrl: "./text-info.component.html",
  styleUrls: ["./text-info.component.scss"],
})
export class TextInfoComponent implements OnInit {
  @ViewChild(`divToAnimate`) divToAnimate!: ElementRef<HTMLDivElement>;
  @Input() title = ``;
  @Input() hintText = ``;

  showHint = false;

  async ngOnInit() {}

  showHintButton() {
    this.showHint = !this.showHint;
    if (this.showHint) {
      this.divToAnimate.nativeElement.style.height = `${this.divToAnimate.nativeElement.scrollHeight}px`;
      return;
    }

    this.divToAnimate.nativeElement.style.height = `0px`;
  }
}
