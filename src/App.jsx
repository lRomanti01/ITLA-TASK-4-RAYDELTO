import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import Pagination from "./components/Pagination";
import { getData } from "./methodsHttp";

const App = () => {
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  const handleCurrentItem = (items) => {
    setCurrentItems(items);
  };

  return (
    <>
      <div>
        <header>
          <div>Agenda multicapas</div>
        </header>
        <div className="agenda-container">
          <Table data={currentItems} />
          <div className="form-container">
            <Form />
          </div>
          <Pagination
            itemsPerPage={20}
            items={data}
            onCurrentItems={handleCurrentItem}
          />
        </div>
      </div>
    </>
  );
};

export default App;
