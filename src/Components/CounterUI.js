export default (props) => {
    const { count, incrementAction, decrementAction } = props
    const increment = () => {
        incrementAction(1)
    }

    const decrement = () => {
        decrementAction(1)
    }
    console.log("CounterUI")
    return (
        <div>
        <h1>当前求和为：{count}</h1>
          &nbsp;
          <button onClick={increment}>+</button>&nbsp;
          <button onClick={decrement}>-</button>&nbsp;
    </div>  
    )
}
