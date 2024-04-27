import { useEffect, useRef, forwardRef,ForwardedRef } from 'react'

interface InputProps {
    placeholder?: string;
  }
const ChildComponent = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div>
            <input ref={ref} type="text" placeholder='子组件输入框' />
        </div>
    )
})

const UseRefPage: React.FC = () => {
    const myRef = useRef<HTMLInputElement | null>(null);

    const componentRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        // myRef.current.focus()
        console.log('使用ref绑定父组件标签',myRef)
        console.log('使用ref+forwardRef绑定子组件标签',componentRef)
    })

    // 聚焦
    const onfocus = () => {
        myRef.current?.focus()
    }

    //聚焦子组件
    const onfocusChild = () => {
        componentRef.current?.focus()
    }

    return (
        <div>
            <h1>UseRefPage</h1>
            <button onClick={onfocus}>父组件按钮-聚焦</button>
            <p>
                <input ref={myRef} type="text" placeholder='父组件输入框' />
            </p>
            <p>
            <button onClick={onfocusChild}>父组件按钮-聚焦子组件</button>
            </p>
            <ChildComponent ref={componentRef} />
        </div>
    )
}

export default UseRefPage