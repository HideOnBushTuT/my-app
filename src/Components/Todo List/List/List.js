export default ({ todos, addTodo, toggle }) => {
    const textHandler = (event) => {
        const text = event.target.value
        if (text.length == 0) {
            return
        }
        addTodo(text)
    }

    const keyDownHandler = (event) => {
        if (event.key != 'Enter') {
            return
        }
        const text = event.target.value
        if (text.length == 0) {
            return
        }
        addTodo(text)
    }

    const checkboxHandler = (event) => {
        const { name } = event.target
        toggle(name)
    }

    return <div>
        <input type="text" onKeyDown={keyDownHandler}/>
        <div>
            {
                todos.map(({ id, todo, isCompleted }) => {
                    return (
                        <div key={id}>
                        <label>
                            <input type="checkbox" name={id} checked={isCompleted} onChange={checkboxHandler} />
                                {todo}
                        </label>
                    </div>
                    )
                })
            }
        </div>
    </div>
}