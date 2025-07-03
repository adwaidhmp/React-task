import React, { useReducer, useRef } from 'react'


function reduce(state, action) {
    switch (action.type) {
        case "ADD_PRODUCT": return { list: [...state.list, action.value] }
        case "UPDATE_PRODUCT": return {
            list: state.list.map((item) => item === action.oldvalue ? action.newvalue : item)
        }
        case "DELETE_PRODUCT":{
            const index = state.list.indexOf(action.value);
            return {
            list: state.list.toSpliced(index, 1)
        }}
        default: {state}
}
}
function Cart() {
    const addreference = useRef()
    const oldref = useRef()
    const newref = useRef()
    const delref = useRef()
    let [cart, dispatch] = useReducer(reduce, { list: ["apple", "mango", "orange"] })

    function add(e) {
        e.preventDefault()
        dispatch({ type: "ADD_PRODUCT", value: addreference.current.value })
        addreference.current.value = ""
    }
    function update(e) {
        e.preventDefault()
        dispatch({ type: "UPDATE_PRODUCT", oldvalue: oldref.current.value, newvalue: newref.current.value })
        oldref.current.value = ""
        newref.current.value = ""
    }
    function del(e) {
        e.preventDefault()
        dispatch({ type: "DELETE_PRODUCT", value: delref.current.value })
        delref.current.value = ""
    }
    return (
        <div>
            <form >
                <input placeholder='add item' ref={addreference} />
                <button onClick={add}>Add</button><br />
                <input placeholder='old item' ref={oldref} />
                <input placeholder='new item' ref={newref} />
                <button onClick={update}>update</button><br />
                <input placeholder='delete item' ref={delref} />
                <button onClick={del}>delete</button>
            </form>
            <h1>cart</h1>
            <ul>
                {cart.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Cart
// 1.	Create a React component that uses useReducer to manage a list of products.
// 2.	Define actions like ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT.
// 3.	Provide a simple UI to dispatch these actions with a form and buttons