gsap.fromTo(".main-headline>p", 
    { 
        x: 500,         
        scale:1,     
        opacity: 0      
    }, 
    { 
        duration: 2,    
        x: 0,           
        scale: 1,        
        opacity: 1,     
        ease: "power3.out"  
    }
);

