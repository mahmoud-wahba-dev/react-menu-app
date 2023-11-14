import React from "react";
import { Row } from "react-bootstrap";
import { items } from "./Data";

export const Category = ({ filterByCategory, allCategory }) => {

  // to filter by category
  const OnFilter = (cat) => {
    console.log("CLC");
    filterByCategory(cat);
  };
  return (
    <>
      <Row>
        <div className="d-flex justify-content-center my-4">
          {/* <button onClick={()=> OnFilter("الكل")} className='btn btn-outline-primary    mx-2' >الكل </button>
        <button onClick={()=> OnFilter("فطار")}  className='btn btn-outline-info mx-2' >فطار </button>
        <button onClick={()=> OnFilter("غداء")}  className='btn btn-outline-info mx-2' >غداء </button>
        <button onClick={()=> OnFilter("عشاء")} className='btn btn-outline-info mx-2' >عشاء </button>
       */}
          {allCategory.length >= 1 ? (
            allCategory.map((item, i) => (
              <button
                key={i + 1}
                onClick={() => OnFilter(item)}
                className="btn btn-outline-info mx-2"
              >
                {item}
              </button>
            ))
          ) : (
            <h3>no category</h3>
          )}
        </div>
      </Row>
    </>
  );
};
