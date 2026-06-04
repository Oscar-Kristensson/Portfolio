

export class TouchScroller {
    scrollLeft: number;


    constructor(
        private timeline: HTMLElement,
        private isDown: boolean = false,         
        private startX: number = 0,
        private dragSpeed: number = 1,    
    ) {
        this.scrollLeft = this.timeline.scrollLeft;

        this.timeline.classList.add("touchScroller");

        this.timeline.addEventListener("mousedown", (e) => this.onMouseDown(e));
        this.timeline.addEventListener("mouseleave", () => this.onMouseLeave());
        this.timeline.addEventListener("mouseup", () => this.onMouseUp());
        this.timeline.addEventListener("mousemove", (e) => this.onMouseMove(e));
    }

    onMouseDown(e: any) {
        this.isDown = true;
        this.timeline.classList.add("dragging");

        this.startX = e.pageX - this.timeline.offsetLeft;
        this.scrollLeft = this.timeline.scrollLeft;
    }

    onMouseLeave() {
        this.isDown = false;
        this.timeline.classList.remove("dragging");
    }

    onMouseUp() {
        this.isDown = false;
        this.timeline.classList.remove("dragging");    
    }

    onMouseMove(e: any) {
        if (!this.isDown) return;

        e.preventDefault();

        const x = e.pageX - this.timeline.offsetLeft;
        const walk = (x - this.startX) * this.dragSpeed; // drag speed multiplier

        this.timeline.scrollLeft = this.scrollLeft - walk;
    } 
}
