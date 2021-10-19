import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsPage {

  news = [];
  searchBarVisible = false;

  constructor(private animationCtrl: AnimationController) { }

  async toggleSearchBar() {
    if (!this.searchBarVisible) {
      this.news = [];
      this.searchBarVisible = true;
      await this.animationCtrl.create()
        // .addElement(document.getElementsByTagName('ion-content')[0])
        .addElement(document.getElementById('search-icon'))
        .fromTo('opacity', '1', '0')
        .afterStyles({ display: 'none' })
        .duration(200)
        .play();
      await this.animationCtrl.create()
        .addElement(document.getElementById('search-bar'))
        .addElement(document.getElementById('close-icon'))
        .addElement(document.getElementById('recent-searches'))
        .beforeStyles({ display: 'block' })
        .fromTo('transform', 'translateY(-44px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .duration(200)
        .play();
    } else {
      this.searchBarVisible = false;
      await this.animationCtrl.create()
        .addElement(document.getElementById('search-bar'))
        .addElement(document.getElementById('close-icon'))
        .addElement(document.getElementById('recent-searches'))
        .fromTo('transform', 'translateY(0px)', 'translateY(-44px)')
        .fromTo('opacity', '1', '0')
        .afterStyles({ display: 'none' })
        .duration(200)
        .play();
      await this.animationCtrl.create()
        // .addElement(document.getElementsByTagName('ion-content')[0])
        .addElement(document.getElementById('search-icon'))
        .beforeStyles({ display: 'block' })
        .fromTo('opacity', '0', '1')
        .duration(200)
        .play();
    }
  }

}
