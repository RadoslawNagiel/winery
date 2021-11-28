import { ActivatedRoute, Router } from "@angular/router";
import { Calculators, Guide } from "src/app/utils/interfaces";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-guide-page",
  templateUrl: "./guide-page.component.html",
  styleUrls: ["./guide-page.component.scss"],
})
export class GuidePageComponent implements OnInit {
  guide: Guide;
  // backWineId = ``;

  Calculators = Calculators;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const urlTree = this.router.parseUrl(this.router.url);
    const slug = urlTree.root.children["primary"].segments
      .map((it) => it.path)
      .join("/")
      .substring(10);

    this.guide = this.dataService.guides.find((g) => g.slug === slug);
    // this.backWineId = this.activatedRoute.snapshot.queryParams.backWine;
  }

  async openGuides(slug: string) {
    await this.router.navigate([`/tabs/tab3/${slug}`]);
  }

  async onBackClick() {
    // if (this.backWineId) {
    //   await this.router.navigate([`/tabs/tab1/show-wine`], {
    //     queryParams: {
    //       index: this.backWineId,
    //     },
    //   });
    //   return;
    // }
    await this.router.navigate([`/tabs/tab3`]);
  }
}
