import TodoHeader from "./Header/index"
import List from "./List/index.jsx"
import Footer from "./Footer/index.jsx"
import TextInputJs from "./TextInput.js/index.jsx"

export default () => {
    return <div>
        <TodoHeader />
        <TextInputJs />
        <List />
        <Footer />
    </div>
}