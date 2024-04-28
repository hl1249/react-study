import React,{ useTransition,useState, FC  } from "react"

const Level_1 = () => {
  console.log('Level_1渲染')
  return (
    <div>
      <p>Level_1</p>
    </div>
  )
}

interface Level_2_childProps{
  value: number
}
const Level_2_child:FC<Level_2_childProps> = ({value}) => {
  // console.log('Level_2_child渲染')
  const startTime = performance.now()
  while(performance.now() - startTime < 3){
    // 模拟耗时操作
  }
  return(
    <li>Level_2_child-{value}</li>
  )
}

const Level_2 = () => {
  console.log('Level_2渲染')
  const items = []
  for(let i = 0;i < 500;i++){
    items.push(<Level_2_child key={i} value={i}></Level_2_child>)
  }
  return(
    <div>
      <p>Level_2</p>
      <ul>
        {items}
      </ul>
    </div>
  )
}
const Level_2_memo = React.memo(Level_2)


const Level_3 = () => {
  console.log('Level_3渲染')
  return(
    <div>
      <p>Level_3</p>
    </div>
  )
}

const UseTransitionPage: React.FC = () => {
  const [current,setCurrent] = useState(0)
  const [isPending,startTransition] = useTransition()
  
  const handleClick = (index:number) => {
    // 组件内部状态引起的渲染变成低优先级任务！！！
    // 深度优先遍历Fiber架构
    // 使用startTransition 包裹后 所有依赖current的函数 都将标记为同步任务 
    // 任务workInProgress 窝可音颇ruai斯 记录当前的树结构更新到了哪一步
    startTransition(() => {
      setCurrent(index)
    })
  }

  console.log('isPending',isPending)
  // const handleClick = (index) => {
      // setCurrent(index)
  // }
  return(
    <div>
      <p>UseTransitionPage-{isPending}</p>
      <div style={{display:'flex',gap:'20px'}}>
      {
        [0,1,2,3].map((item,index) => {
          return(
            <button key={item} onClick={() => {
              handleClick(index)
            }} >
              {/* Level_{index+1} */}
              Level_{index === 3 && 'Level-2使用memo' || index+1}
            </button>
          )
        })
      }
      </div>
      <p></p>
      {
       current === 0 ? <Level_1 /> : current === 1 ? <Level_2_memo /> : current === 2 ? <Level_3 /> : < Level_2_memo/>
      }
    </div>
  )
}

export default UseTransitionPage