import React,{ useState, useDeferredValue } from "react";

interface SlowListProps {
  text: string;
}
const SlowList: React.FC<SlowListProps> = ({ text }) => {
  console.log("SlowList执行了")
  const item = [];
  for (let i = 0; i < 250; i++) {
    item.push(<SlowItem text={text} key={i} />);
  }
  return <ul>{item}</ul>;
};

const MemoSlowList = React.memo(SlowList);

const SlowItem: React.FC<SlowListProps> = ({ text }) => {
  console.log("SlowItem执行了")
  const time = new Date().getTime() + 1;
  while (new Date().getTime() < time) {
    //do nothing
  }
  return <li>Text-{text}</li>;
};

const UseDeferredValuePage = () => {
  const [value, setValue] = useState("");

  // 状态引起的渲染变成低优先级任务
  const deferredValue = useDeferredValue(value);
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoSlowList text={deferredValue} />
    </div>
  );
};

export default UseDeferredValuePage;
