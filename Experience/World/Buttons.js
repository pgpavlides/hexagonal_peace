import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"

export default class Buttons {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.experience.world.room
       
        // this.generateButton()
        this.resetButton()
        
    }
    
    generateButton() {

        this.button = document.querySelector(".generate")

        
        
        this.button.onclick = (event) => {
            // console.log(this.button)
            
            this.room.allAnimation();
        }
    }
    resetButton() {

        this.button2 = document.querySelector(".reset")
        this.button2.onclick = (event) => {
            // console.log(this.button2)
            
            this.room.reset();
        }
    }

    resize(){

    }

    update(){}
        
     
};
