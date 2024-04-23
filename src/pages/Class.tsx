import { Component, createRef } from "react";

interface class_template_props{
}

interface class_template_state{
    name:string
}

class Class_template extends Component<class_template_props,class_template_state> {
    private myRef = createRef<HTMLDivElement>()

    constructor(props: class_template_props){
        console.log("0-constructor")
         super(props)

         this.state ={
            name:"张三"
         }

         this.myRef = createRef<HTMLDivElement>()
    
    }

    //执行时机 数据更新 在数据更新之前劫持 可以强制覆盖 ps：是一个静态方法
    static getDerivedStateFromProps(){
        console.log("0-getDerivedStateFromProps")
        return {
            name:"例子"
        }
    }

    //执行时机 页面初始化-页面重新渲染 进行虚拟dom的构建
    render(){
        console.log("0-render")

        // 目前还拿不到ref组件 因为虚拟dom还未构建
        console.log(this.myRef)

        const changeName = ()=>{
            this.setState({
                name:"李四"
            })
        }

        return <div>
            <p onClick={changeName}>类组件模板-{this.state.name}</p>
            <Children_template></Children_template>

            <div ref={this.myRef}>我是被ref绑定的元素</div>
        </div>
    }

    // 虚拟dom构建 并且该组件的子组件的虚拟dom 构建完成
    getSnapshotBeforeUpdate() {
        
        // 可以拿到声明的ref组件 因为已经经过render 构架了虚拟dom
        console.log(this.myRef)

        console.log("0-getSnapshotBeforeUpdate")
        return null
    }

    // 虚拟dom绑定上真实dom 并且渲染
    componentDidUpdate(){
        console.log("0-componentDidUpdate")
    }

    componentDidMount(): void {
        console.log("0-componentDidMount")
    }

}

class Children_template extends Component {
    constructor(props: class_template_props){
        console.log("1-constructor")
        super(props)

        this.state = {
            name:"王五"
        }
    }

    static getDerivedStateFromProps(){
        console.log("1-getDerivedStateFromProps")
        return {
            // name:"被劫持的-王五"
        }
    }

    render(){
        console.log("1-render")
        return <div>子组件模板</div>
    }

    getSnapshotBeforeUpdate() {
        console.log("1-getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("1-componentDidUpdate")
    }

    componentDidMount(): void {
        console.log("1-componentDidMount")
    }
}


export default Class_template