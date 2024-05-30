

class Ellip{
    axis_A: HTMLInputElement | null;
    axis_B: HTMLInputElement | null;
    axis_C: HTMLInputElement | null;
    calcButton: HTMLButtonElement | null;
    result: HTMLInputElement | null;
    volume: number;
    constructor(){
        this.axis_A=null;
        this.axis_B=null;
        this.axis_C=null;
        this.calcButton=null;
        this.result=null;
        this.volume=0;
    
        this.bindStart();
        this.eventHandlerStart();
    }



bindStart(){
    this.axis_A=document.getElementById('axis_A') as HTMLInputElement
    this.axis_B=document.getElementById('axis_B') as HTMLInputElement
    this.axis_C=document.getElementById('axis_C') as HTMLInputElement
    this.calcButton=document.getElementById('calcButton') as HTMLButtonElement
    this.result=document.getElementById('result') as HTMLInputElement
}

eventHandlerStart(){
    this.calcButton?.addEventListener('click',()=>{
        this.calcStart()
    })
}

calcStart(){
    // let ax_a:number;
    // let ax_b:number;
    // let ax_c:number;
    if(this.axis_A && this.axis_B && this.axis_C){
        const ax_a=parseFloat(this.axis_A.value);
        const ax_b=parseFloat(this.axis_B.value);
        const ax_c=parseFloat(this.axis_C.value);
        this.calcVolume(ax_a,ax_b,ax_c);
        this.resultRender();
    }
}

calcVolume(ax_a:number,ax_b:number,ax_c:number){
    this.volume= (4/3)*Math.PI *ax_a*ax_b*ax_c;
}

resultRender(){
    if(this.result){
        this.result.value=`${this.volume.toFixed(2)}`
    }
}
};

new Ellip();