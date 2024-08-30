// React Class Components
// import React, { useState } from 'react';
// class TodoList extends React.Component {
//     state = {
//         name: '',
//         age: 18
//     }
//     render() {
//         return (
//             <div>
//                 <label>Name</label>
//                 <input type='text' onChange={(event) => this.setState({ name: event.target.value })}></input>
//                 <br />
//                 <br />
//                 Hello {this.state.name} dep trai {this.state.age} tuoi
//             </div>
//         )
//     }
// }

import { useState } from "react";
import _ from 'lodash';
import AddTodo from './Add';
import DisplayTodo from "./DisplayTodo";


// React HOOK Components
const Home = () => {
    const [todo, setTodo] = useState("");

    const [listTodo, setListTodo] = useState([
        { id: "todo1", name: "Facebook" },
        { id: "todo2", name: "Youtube" },
        { id: "todo3", name: "Instagram" }
    ]);

    const Random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const handlerClickBtn = (event) => {
        if (!todo) {
            alert("TODO Name is not empty!!!")
            return;
        }
        let todoId = Random(4, 9999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }

        setListTodo([...listTodo, todoItem])     //cách 1 : spread operator (tối ưu)
        setTodo("");



        // let currentListTodo = _.clone(listTodo);   //cách 2 : 
        // currentListTodo.push(todoItem);
        // console.log(currentListTodo)
        // setListTodo(currentListTodo)


    };

    const handlerDelete = (id) => {
        let currentListTodo = _.clone(listTodo);  //tao ra ban sao chep cua mang listTodo
        currentListTodo = currentListTodo.filter(item => item.id !== id)

        // currentListTodo = currentListTodo.filter(item => {
        //     if (item.id !== id) return item;
        // })
        setListTodo(currentListTodo)
        // alert('Click me ' + id)
        // or
        // alert(`Click me ${id}`)   
    };

    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handlerClickBtn={handlerClickBtn}

            />

            <DisplayTodo
                childData={listTodo}
                handlerDelete={handlerDelete}
            />



        </div>
    );
};

export default Home;