// 1. we have to register the components to aframe
AFRAME.registerComponent("mycar",{
    schema:{
        // defines or describes the object and there types
        model:{type:"string",default:"./car/scene.gltf"}
    },
    init:function(){
        //  when component first
        
    } ,
    update:function(){
        // when i want to update my component or entity
    },
    remove:function(){
        // when i want to remove component or entity from screen
    },
    tick:function(){
        //  its used to check continues changes in scene
        this.el.setAttribute("gltf-model",this.data.model)
        var pos = {x:5,y:-10,z:100}
        var rotation = {x:0,y:-90,z:0}
        var scale = {x:0.1,y:0.1,z:0.1}
        this.el.setAttribute("position",pos)
        this.el.setAttribute("rotation",rotation)
        this.el.setAttribute("scale",scale)
    }

})