import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Guide } from "src/app/utils/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-guides",
  templateUrl: "guides.page.html",
  styleUrls: ["guides.page.scss"],
})
export class GuidesComponent {
  guides: Guide[] = [];
  showingGuides: Guide[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.guides = this.dataService.guides;
    this.searchChange(``);
  }

  searchChangeEvent(event: any) {
    this.searchChange(event.target.value);
  }

  searchChange(text: string) {
    if (text === ``) {
      this.showingGuides = this.guides;
    } else {
      this.showingGuides = this.guides.filter((guide) =>
        guide.title.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.showingGuides = this.showingGuides.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
  }

  async selectGuide(slug: string) {
    await this.router.navigate([`/tabs/tab3/${slug}`]);
  }
}
