import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './product.model'

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
  inputStringTest = ''
  inputNumberTest: number = 0
  widthImg: number = 10
  /* Using objects */
  person = {
    name: 'Nicolas',
    lastName: 'Rojas',
    avatar: 'https://us.123rf.com/450wm/redlinevector/redlinevector1704/redlinevector170402590/75360779-icono-simple-del-programador.jpg?ver=6'
  }
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  /* Array */
  studentsArr: string[] = ['Leo','Gonzalo', 'Juan']
  inpStudent: string = ''

  /* Objects Array */
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 200,
      image: './assets/images/juguete.jpg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 300,
      image: './assets/images/bicicleta.jpg'
    },
    {
      name: 'Colección de albumes',
      price: 300,
      image: './assets/images/albumes.jpg'
    },
    {
      name: 'Celular casi nuevo',
      price: 800,
      image: './assets/images/celular.jpg'
    },
    {
      name: 'Mando Xbox series S',
      price: 300,
      image: './assets/images/xbox.jpg'
    },
    {
      name: 'Estabilizador Forza',
      price: 190,
      image: './assets/images/estabilizador.jpg'
    }
  ]

  /* Métodos */
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

  changeName(event: Event) {
    const element = event.target as HTMLInputElement
    this.person.name = element.value
  }

  addStudent() {
    this.studentsArr.push(this.inpStudent)
    this.inpStudent = ''
  }

  deleteStudent(index: number) {
    this.studentsArr.splice(index, 1)
  }
}
