import {onBeforeUnmount, onMounted, reactive} from "vue";

function savePoint(){
    //实现鼠标打点的数据
    let point=reactive({
        x:0,
        y:0
    })
    //实现鼠标打点的方法
    function events(event){
        console.log(event.pageX,event.pageY);
        point.x=event.pageX;
        point.y=event.pageY;
    }
    //实现鼠标打点的生命周期钩子
    onMounted(()=>{
        window.addEventListener("click",events)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener("click",events)
    })

    return point;
}

export  default  savePoint;