import TodoHeader from "./Header/index"
import List from "./List"
import Footer from "./Footer"
import TextInputJs from "./TextInput.js"

export default () => {
    return <div>
        <TodoHeader />
        <TextInputJs />
        <List />
        <Footer />
    </div>
}