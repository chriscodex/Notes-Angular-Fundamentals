import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';

/* AppComponent class properties need to be public */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Christian'
  age: number = 24
  imgAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  imgDocker: string = 'https://miro.medium.com/max/323/1*DPjl0PU5oGDDhajYoof38w.png'
  btnDisabled: boolean = false
  progressValue = 50
  /* Using objects */
  person = {
    name: 'Nicolas',
    lastName: 'Rojas',
    avatar: 'https://us.123rf.com/450wm/redlinevector/redlinevector1704/redlinevector170402590/75360779-icono-simple-del-programador.jpg?ver=6'
  }

  increaseAge() {
    this.age += 1
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  /* Capturar el evento */
  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }
}
