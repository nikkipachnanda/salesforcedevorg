import { LightningElement } from 'lwc';
export default class Cowimghover extends LightningElement {

     banner1 = arloimg + '/banner1.jpg';
     banner2 = arloimg + '/banner2.jpg';
     banner3 = arloimg + '/banner3.jpg';
     banner4 = arloimg + '/banner4.jpg';
     pfd = arloimg + '/pfd.svg';
     logo = arloimg + '/arlo.svg';
     graded = arloimg + '/graded.svg';
     gradedBadge = arloimg + '/graded-badge.svg';
     cow = arloimg + '/cow.svg';
     brisket = arloimg + '/brisket.jpg';
     cattle = arloimg + '/cattle-bg.jpg';
     cattleBanner = arloimg + '/cattle-bg-2.jpg';
     diner1 = arloimg + '/diner1.jpg';
     diner2 = arloimg + '/diner2.jpg';
     diner3 = arloimg + '/diner3.jpg';
     leaf = arloimg + '/leaf.png';

     knuckle = arloimg + '/knuckle.jpg';
     topside = arloimg + '/topside.jpg';
     blade = arloimg + '/blade.jpg';
     cube = arloimg + '/cube-roll.jpg';
     striplon = arloimg + '/striplon.jpg';
     tenderlon = arloimg + '/tenderlon.jpg';
     rump = arloimg + '/rump.jpg';
     chuck = arloimg + '/chuck.jpg';
     gradedLine = arloimg + '/grade-line.svg';

     // Default values for active part
    partName = 'MEAT STANDARDS AUSTRALIA';
    partContent = 'is a quality assurance program for beef and sheep meat, by scientifically evaluating attributes such as tenderness and flavour, MSA ensures consistent high-quality products. It provides guidelines to producers, enhancing meat quality and meeting consumer expectations.'
    partImage = this.gradedBadge;
    gradeImage = this.gradedBadge;
    activePart = ''; // Set Brisket as the active part by default
    isHovered = false; // Track hover state
    imageCache = new Map(); // Cache for preloaded images


        connectedCallback() {
        console.log('Preloading images:', [this.brisket, this.topside, this.rump]);
        this.preloadImages([this.brisket, this.topside, this.rump, this.chuck, this.tenderlon, this.striplon, this.cube, this.blade,  ]);
    }

     preloadImages(images) {
        images.forEach((src) => {
            if (src && !this.imageCache.has(src)) {
                const img = new Image();
                img.src = src;
                this.imageCache.set(src, img); // Cache the preloaded image
            }
        });
    }

    handleMouseOver(event) {
        const target = event.currentTarget;
        if (target) {
            const newPartImage = target.getAttribute('data-image');
            this.isHovered = true;

            if (this.imageCache.has(newPartImage)) {
                // Switch to the cached image to prevent flickering
                this.partName = target.getAttribute('data-name') || this.partName;
                this.partContent = target.getAttribute('data-content') || this.partContent;
                this.partImage = newPartImage;
                this.activePart = target.getAttribute('data-name') || this.activePart;
            }
        }
    }




    // Method to handle mouse leave event
    handleMouseLeave() {
        this.partName = 'MEAT STANDARDS AUSTRALIA';
        this.partContent = `is a quality assurance program for beef and sheep meat, by
scientifically evaluating attributes such as tenderness and
flavour, MSA ensures consistent high-quality products. It
provides guidelines to producers, enhancing meat quality
and meeting consumer expectations.`;
        this.partImage = this.gradeImage;
        this.activePart = ''; // Reset to default active part
        this.isHovered = false; // Reset hover state
    }

    // Computed classes for each part
    get shotPlateClass() {
        return this.activePart === 'BEEF Short Plate' ? 'part splate active' : 'part splate';
    }

    get brriskClass() {
        return this.activePart === 'BEEF Brisket' ? 'part brisk meatImg active' : 'part brisk meatImg';
    }

    get flankClass() {
        return this.activePart === 'BEEF Flank' ? 'part flank active' : 'part flank';
    } 

   get shankClass() {
        return this.activePart === 'BEEF Shank' ? 'part shank active' : 'part shank';
    } 

   get roundClass() {
        return this.activePart === 'BEEF KNUCKLE' ? 'part round active' : 'part round';
    }      

   get topsideClass() {
        return this.activePart === 'BEEF topSide' ? 'part topside active' : 'part topside';
    }      

  get rumpClass() {
        return this.activePart === 'BEEF Rump' ? 'part rump active' : 'part rump';
    }  

   get sirlionClass() {
        return this.activePart === 'BEEF sirLion' ? 'part sirlion active' : 'part sirlion';
    }  

   get tenderloinClass() {
        return this.activePart === 'BEEF Tenderloin' ? 'part tenderloin active' : 'part tenderloin';
    }            
  
  get shortloinClass() {
        return this.activePart === 'BEEF Shortloin' ? 'part shortloin active' : 'part shortloin';
    } 

   get cuberollClass() {
        return this.activePart === 'BEEF Cuberoll' ? 'part cuberoll active' : 'part cuberoll';
    }   

   get bladeClass() {
        return this.activePart === 'BEEF BOLAR Blade' ? 'part blade active' : 'part blade';
    }  

    get chukClass() {
        return this.activePart === 'BEEF Chuck' ? 'part chuck active' : 'part chuck';
    }  

    get neckClass() {
        return this.activePart === 'BEEF Neck' ? 'part neck active' : 'part neck';
    }  

    // Dynamic class for the displayed image
    get imageClass() {
        return this.isHovered ? 'part-image meatImg' : 'imageDefault';
    }   

     get headingClass() {
        return this.isHovered ? '' : 'defaultHeading';
    }  

     get paraClass() {
        return this.isHovered ? '' : 'textCenter';
    }                      
 

}