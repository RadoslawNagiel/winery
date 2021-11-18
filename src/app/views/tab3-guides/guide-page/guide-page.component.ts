import { Component, OnInit } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Guide } from "src/app/utils/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-guide-page",
  templateUrl: "./guide-page.component.html",
  styleUrls: ["./guide-page.component.scss"],
})
export class GuidePageComponent implements OnInit {
  guide: Guide;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.guide = this.dataService.guides.find(
      (g) => g.slug === this.router.url.substring(11)
    );
  }

  async onBackClick() {
    await this.router.navigate([`/tabs/tab3`]);
  }
}
