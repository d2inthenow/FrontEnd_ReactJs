import _ from 'lodash';
const handlerDelete = (id) => {
    //     let currentListTodo = _.clone(listTodo);  //tao ra ban sao chep cua mang listTodo
    //     currentListTodo = currentListTodo.filter(item => item.id !== id)

    //     // currentListTodo = currentListTodo.filter(item => {
    //     //     if (item.id !== id) return item;
    //     // })
    //     setListTodo(currentListTodo)
    //     // alert('Click me ' + id)
    //     // or
    //     // alert(`Click me ${id}`)   
    // };
    // const a = {
    //     a : [1,3,5,7,9],
    //     b : [2,4,6,8,10]
}
const DisplayTodo = (props) => {
    const { handlerDelete } = props;
    const listTodo = props.childData;

    return (
        <div>
            <div>--------listTodo:------ </div>
            {
                listTodo.map((item, index) => {

                    return (
                        <div id={item.id} key={item.id} onClick={() => handlerDelete(item.id)}>{item.name}</div>
                    )
                })
            }
        </div>
    )
};

export default DisplayTodo;