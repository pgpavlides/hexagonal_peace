import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"


export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.cube = this.resources.items.cube.scene;

        this.text1 = document.querySelector(".introtext");
        this.text2 = document.querySelector(".introtext2");
        this.text3 = document.querySelector(".introtext3");
        
        

        this.setModel();
        // this.timeline = new GSAP.timeline();


        // this.resetPotitions();
        // this.allAnimation();
                
    }

    setModel() {

        
     
        this.timeline = new GSAP.timeline();

        

        this.cube.scale.set(0,0,0)
        this.scene.add(this.cube)

        

        this.timeline.to(this.cube.scale, {
            x: 0.45,
            y: 0.45,
            z: 0.45,
            delay: 0.5,
            ease: "back.inout(2.5)",
            
            duration: 1.8,  
            
        },"same")

        this.timeline.to(this.text1, {
            // fontSize: 35,
            opacity: 1,
            delay: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")
        this.timeline.to(this.text2, {
            // fontSize: 15,
            delay: 1,
            opacity: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")
        this.timeline.to(this.text3, {
            // fontSize: 15,
            delay: 1,
            opacity: 1,
            ease: "Sine.easeInOut",
            duration: 1,  
            
        },"same")


        
        // console.log(this.resources.items.audio_1)
        
    }

    allAnimation(){

        
        
          this.cube.children.forEach((e) => {
            if (e.name === "Cylinder" || e.name === "Broccoli_Logo" ){

            }else{
                this.random = Math.floor(Math.random() * (2000 - 0.00 + 100)) / 1000;
                // console.log(this.random)
                GSAP.to(e.position, {
                    x: 0,
                    y: this.random,
                    z: 0,
                    // delay: 3,
                    
                    ease: "expo.easeOut",
                    
                    duration: 0.9,  
                    
                }) 
            }              
          })        
    }    

    reset(){ 
        
        // this.timeline = new GSAP.timeline();
      
        console.log("reach")
        this.cube.children.forEach((e) => {
            
          
            GSAP.to(e.position, {
                  x: 0,
                  y: 0,
                  z: 0,
                //   delay: ,
                  
                  ease: "expo.easein",
                  
                  duration: 1,  
                  
              }) 
                        
        })        
  }
    
    setAnimation() {
        // this.mixer = new THREE.AnimationMixer(this.cube);
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
                
    //     this.swim.play();
        
    // //   
    //     console.log(this.room);
    }   
    
    resize(){

    }

    update(){
        
    }

}