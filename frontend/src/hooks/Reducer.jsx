let initialValue=0
const counter = (state, action) => {
    switch (action.type) {
        case 'increment':
        return { count: state.count + 1 }
        case 'decrement':
        return { count: state.count - 1 }
        default:
        return state
    }
}
const add = (state, action) => {
    switch
    const Reducer = () => {
        const [count, dispatch] = useReducer(counter, { count: initialValue })
        return (
            <div>
                <h1>Count:{count}</h1>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        )
    }
 }    

export default Reducer

