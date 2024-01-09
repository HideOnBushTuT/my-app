export default ({ isAllCompleted, toggleAll, untoggleAll }) => {
    const checkboxHandler = (event) => {
        if (event.target.checked) {
            toggleAll()
        } else {
            untoggleAll()
        }
    }
    console.log(isAllCompleted)
    return (
        <div>
            <label>
            <input type="checkbox" checked={isAllCompleted} onChange={checkboxHandler}  />
            TOGGLE ALL
            </label>
        </div>
    )
}