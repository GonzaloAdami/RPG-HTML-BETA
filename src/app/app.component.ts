import { Component } from '@angular/core';

interface Personaje {
  atk: number;
  HP: number;
  maxHP: number;
  DEF: number;
 
}

class Heroe implements Personaje {
  atk: number;
  maxHP: number;
  maxMP: number;
  DEF: number;
  HP: number;
  MP: number;

  constructor() {
    this.HP = 100;
    this.MP = 100;

    this.DEF = 10;

    this.maxHP = 100;
    this.maxMP = 100;

    this.atk = 20;
  }

}
class Enemy implements Personaje{
  atk: number;
  HP: number;
  DEF: number;
  maxHP: number;
  name: string;
  avatar: string;
 constructor() {
  this.HP = 100;
  this.maxHP = 100;

  this.DEF = 10;
  this.atk = 10;
  this.name = "Nito el Rey del cementerio";
  this.avatar = "enemy.gif";
 }
}

class System {
  atacar(character: Personaje, enemy: Personaje) {
    enemy.HP = enemy.HP - (character.atk - enemy.DEF);
    console.log(`El enemigo ahora tiene ${enemy.HP} HP.`);
  }

  constructor() {
    // Obtén la lista de elementos li
    const listaItems = document.querySelectorAll('.lista');

    // Agrega un evento de clic a cada elemento li
    listaItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.textContent !== null) {
          this.handleClick(item.textContent);
        }
      });
    });
  }

  handleClick(opcion: string) {
    console.log(`Clic en opción: ${opcion}`)
    // Dependiendo de la opción, realiza la acción correspondiente
    if (opcion === 'ATACAR') {
        // Supongamos que tienes instancias de Heroe y Enemigo
        const heroe = new Heroe();
        const enemy = new Enemy();
  
        // Llama a la función atacar
        this.atacar(heroe, enemy);
        console.log(`El enemigo ahora tiene ${enemy.HP} HP.`);
    } else if (opcion === 'HABILIDADES') {
   
    } else if (opcion === 'DEFENDER') {
   
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalFantasyXP';
  
  // Crear una instancia de la clase Heroe
  heroe = new Heroe();
  enemy = new Enemy();
  system = new System();

  ejecutarAccion(opcion: string) {
    if (opcion === 'ATACAR') {
      this.system.atacar(this.heroe, this.enemy);
    } else if (opcion === 'HABILIDADES') {
      // Lógica para la opción HABILIDADES
    } else if (opcion === 'DEFENDER') {
      // Lógica para la opción DEFENDER
    }
  }
}

