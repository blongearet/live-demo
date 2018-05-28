import {Component} from '@angular/core'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  static GIFS: string[] = [
    'https://m.popkey.co/527299/MwREL.gif',
    'https://m.popkey.co/b0947f/RXKAk.gif',
    'https://m.popkey.co/cacf56/LWKxA.gif',
    'https://m.popkey.co/e229ad/xEZQM.gif'
  ]

  public currentGif: string

  constructor() {
    this.generateRandomGif()
  }

  private generateRandomGif(): void {
    const max = WelcomeComponent.GIFS.length
    const gifIndex = Math.ceil(Math.random() * max - 1)
    this.currentGif = WelcomeComponent.GIFS[gifIndex]
  }

}
