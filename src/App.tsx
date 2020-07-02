import React from "react";
import { list as initialList, List } from "./list";
import "./App.css";
import { produce } from "immer";

function App() {
  const listFromStorage = localStorage.getItem("list");
  const [list, setList] = React.useState<List>(
    listFromStorage ? JSON.parse(listFromStorage) : initialList
  );

  const onChange = (groupTitle: string, itemTitle: string, value: boolean) => {
    const newList = produce(list, (list) => {
      const item = list[groupTitle].find(({ title }) => title === itemTitle);
      if (item) {
        item.checked = value;
      }
    });
    setList(newList);
  };

  React.useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const reset = () => {
    window.localStorage.removeItem("list");
    setList(initialList);
  };

  const addItem = (groupTitle: string) => {
    const newItem = prompt("Enter item");
    if (!newItem) return;
    const newList = produce(list, (list) => {
      list[groupTitle].push({ title: newItem, checked: false });
    });
    setList(newList);
  };

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <div style={{display: 'flex'}}>
        {Object.entries(list).map(([groupTitle, values]) => {
          return (
            <div key={groupTitle}>
              <h4>{groupTitle}</h4>
              {values.map(({ title, checked }) => {
                return (
                  <div key={title}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) =>
                        onChange(groupTitle, title, e.target.checked)
                      }
                    />
                    <label>{title}</label>
                  </div>
                );
              })}
              <button onClick={() => addItem(groupTitle)}>Add</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
