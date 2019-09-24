import React, { useState } from "react";
import "./App.scss";
import NameTag from "./components/nameTag";
import Input from "./components/input";
import Item from "./components/item";
import useList from "./hooks/useList";
// const styleName = {
//   color: "gray",
//   border: "1px solid gray",
//   paddingBottom: "50px",
//   paddingTop: "50px",
//   width: "200px"
// };

// const nameTagTitle = {
//   color: "red",
//   borderColor: "blue",
//   borderStyle: "dotted"
// }

// const nameTagTitle_one = {
//   color: "blue"
// }

const removeInline = BaseComponents => props => {
  const removeTag = { ...props };
  delete removeTag.style;

  return <BaseComponents {...removeTag} />;
};
// eslint-disable-next-line no-unused-vars
const CleanNameTag = removeInline(NameTag);

const initialNames = [
  { firstName: "Hasmukh", lastName: "Baldaniya" },
  { firstName: "Vipul", lastName: "Ahir" },
  { firstName: "Paresh", lastName: "Baldaniya" },
  { firstName: "Jenish", lastName: "Ahir" }
];

const groceryNames = [
  { name: "Tomato", calorie: 20 },
  { name: "Rice", calorie: 30 },
  { name: "Candy", calorie: 100 }
];

function App() {
  // const [age, setAge] = useState(28);
  // const [names, setName] = useState(initialNames);
  const item = useList(groceryNames);
  const [editable, setEditable] = useState(false);

  function removeHandle(e) {
    item.removeItem(e.target.name);
  };

  function editHandle(e){
    // const filteredItem = list.filter(item => item.name !== e.target.name);
    setEditable(true);
  }

  function updateHandle(event, index) {
    if(event.key === 'Enter') {
      // const copyList = [...list];
      // copyList[index].name = event.target.value
     // list[index].name = event.target.value;
      setEditable(!editable);
    //  setList(list);

    item.saveItem(index, event.target.name);
    }
  }

  // const ageUpHandle = () => {
  //   setAge(age + 1);
  // }

  // const ageDownHandle = () => {
  //   setAge(age - 1);
  // }
  return (
    <div className="App">
      {/* <h1 style={{...styleName, ...nameTagTitle}}>Hi, React App</h1>
      <h3 style={styleName}>Hasmukh</h3> */}

      {/* <h3>Use State</h3>
      <h2>My age is: {age}</h2>
      <button type="button" onClick={ageUpHandle}>Age Up</button>
      <button type="button" onClick={ageDownHandle}>Age Down</button> */}

      <h1 className="name tagTitle">Grocery List</h1>

      {item.list.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            onRemoveEvent={removeHandle}
            calorie={item.calorie}
            editable={editable}
            onEditEvent={editHandle}
            onUpdateValue={updateHandle}
            index={index}
          ></Item>
        );
      })}

      {/* {
      names.map((value, index) => {
        return <NameTag key={`${index}${value.firstName}${value.lastName}`} firstName={value.firstName} lastName={value.lastName}></NameTag>
      })
     } */}

      {/* <CleanNameTag firstName={names[0].firstName} lastName={names[0].lastName}></CleanNameTag>
      <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
      <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag>
       */}
      {/* <Input placeholder="Enter value" type="text"></Input> */}
    </div>
  );
}

export default App;
