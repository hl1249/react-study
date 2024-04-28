import { useTransition,useState, FC } from "react"

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
    startTransition(() => {
      setCurrent(index)
    })
  }
  // const handleClick = (index) => {
      // setCurrent(index)
  // }
  return(
    <div>
      <p>UseTransitionPage-{isPending}</p>
      <div style={{display:'flex',gap:'20px'}}>
      {
        [0,1,2].map((item,index) => {
          return(
            <button key={item} onClick={() => {
              handleClick(index)
            }} >Level_{index+1}</button>
          )
        })
      }
      </div>
      <p></p>
      {
       current === 0 ? <Level_1 /> : current === 1 ? <Level_2 /> : <Level_3 />
      }
    </div>
  )
}

export default UseTransitionPage