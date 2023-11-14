import { Container } from "react-bootstrap";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { Category } from "./Components/Category";
import ItemList from "./Components/ItemList";
import { items } from "./Components/Data";
import { useState } from "react";

function App() {
  const [itemData, setItemData] = useState(items);

  const allCategory = [ "الكل" ,...new Set(itemData.map((item) => item.category))];
  console.log(allCategory);



  // filter by category
   const filterByCategory = (cat) => {
    console.log("FILTER APP");
    if (cat == "الكل") {
      console.log("ss");
      setItemData(items);
    } else {
      let newArr = items.filter((item) => item.category == cat);
      console.log(newArr, "NEW ARR");
      setItemData(newArr);
    }
  };

  // filter by search
  const filterBySearch = (word) => {
    if (word != "") {
      let newArr = items.filter((item) => item.title == word);
      setItemData(newArr);
    }
  };

  return (
    <>
      <Navbar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory = {allCategory} />
        <ItemList itemData={itemData} />
      </Container>
    </>
  );
}

export default App;
