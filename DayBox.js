//요일 박스를 정의한다.
class DayBox{
    constructor(container, width, height, x, y, text){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.text=text;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";

        this.div.innerText=this.text;
        this.div.style.fontWeight="bold";

        this.div.style.textAlign="center";
        this.div.style.paddingTop="10px";

        this.div.style.border="1px solid rgb(240, 233, 247)";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div);
    }
}