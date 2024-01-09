export default ({ toggleAll, untoggleAll }) => {
    const checkboxHandler = (event) => {
        if (event.target.checked) {
            toggleAll()
        } else {
            untoggleAll()
        }
    }

    return (
        <div>
            <label>
            <input type="checkbox" onChange={checkboxHandler}  />
            TOGGLE ALL
            </label>
        </div>
    )
}