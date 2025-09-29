// import React, { useEffect, useState } from "react";
// import { Cards, Chart, Country } from "./components";
import style from "./components/app.module.css";
// import axios from "axios";
import Image from "../src/image.png";
// const url = "https://disease.sh/v3/covid-19/all";

// const App = () => {
//   const [data, setData] = useState({});

//   const getData = async () => {
//     try {
//       const { data } = await axios.get(url);
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className={style.container}>
//       <div>
//         <div className={style.imageContent}>
//           <img src={Image} alt="" className={style.image} />
//         </div>
//         <Cards data={data} />
//         <Chart data={data}/>
//         <Country />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { Cards, Chart, Country } from "./components";
import { fetchGlobal } from "./api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchGlobal();
      setData(fetchedData);
    };
    loadData();
  }, []);

  return (
    <div>
      <div className={style.imageContent}>
        <img src={Image} alt="" className={style.image} />
      </div>
      <Cards data={data} />
      <Country setData={setData} />
      <Chart data={data} />
    </div>
  );
};

export default App;
