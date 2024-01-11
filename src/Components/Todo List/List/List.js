export default ({ todos, toggle }) => {
    const checkboxHandler = (event) => {
        const { name } = event.target
        toggle(name)
    }

    return <div>
        <div>
            {
                todos.map(({ id, todo, isCompleted }) => {
                    return (
                        <div key={id}>
                        <label style={{ textDecoration: isCompleted ? 'line-through' : null }}>
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