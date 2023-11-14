//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const message = items.length === 0 ? <p>No item found</p> : null;
  // const getMessage = () => {
  // if there are variables to be passed
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  // Event handler
  // const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>{heading}</h1>
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
