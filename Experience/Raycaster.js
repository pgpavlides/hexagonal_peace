import * as THREE from "three"
import Experience from "./Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Raycaster extends EventEmitter {
    constructor() {
        super();
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device = this.sizes.device; 
        
        this.cube = this.resources.experience.scene;
        // this.room = this.experience.world.room
        // this.player = this.experience.audioplayer
        
        
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.currentIntersect = null;

        this.onPointerMove();
        this.onPointerClick();
        // this.onPointerHover();

    } 

    onPointerMove() {
    
        window.addEventListener("mousemove", (event) =>{
        
            this.mouse.x = event.clientX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1  
            
            });        
        }

        onPointerClick(){
            
            window.addEventListener('click', () =>
            {
     
                this.timeline = new GSAP.timeline();
    
                
    
                if(this.currentIntersect)
                {
                    this.experience.world.room.allAnimation();
                }
                

                
               
            })
        }        

    // onPointerHover(){
            
    //     window.addEventListener('mouseover', () => {
                
    //              if(this.currentIntersect)
    //              {
    //                 console.log(this.currentIntersect)
    //                 // if(this.currentIntersect.object.name === "Button_1")
    //                 // {
    //                 //     console.log("AAAAA")
    //                 // }
                    
    //              }
    //          })
    //      }        
    

    update(){
        this.raycaster.setFromCamera(this.mouse,this.camera.perpectiveCamera)
       
        this.objectsToTest = [ this.cube ];
        this.intersects = this.raycaster.intersectObjects(this.objectsToTest)
    
        if(this.intersects.length)
        {
            if(!this.currentIntersect)
            {
                // console.log(this.cube.children[4].children)
                
                // if(this.currentIntersect.object.name === "Button_1")
                //     {
                        
                        
                //     }
            }
    
            this.currentIntersect = this.intersects[0]
        }
        else
        {
            if(this.currentIntersect)
            {
                // console.log('mouse leave')
            }
            
            this.currentIntersect = null
        }
    }
} 