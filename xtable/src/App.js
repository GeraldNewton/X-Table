import { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleClick = (e) => {
    e.target.value === "date"
      ? setArr((prev) => [...compareDate(prev)])
      : setArr((prev) => [...compareViews(prev)]);
  };
  const compareDate = (prev) => {
    return prev.sort((a, b) => {
      let d1 = new Date(a.date);
      let d2 = new Date(b.date);
      if (d1 < d2) return -1;
      else if (d1 > d2) return 1;
      else if (a.date === b.date) return b.views - a.views;
      else return 0;
    });
  };

  const compareViews = (prev) => {
    return prev.sort((a, b) => {
      if (a.views !== b.views) return b.views - a.views;
      else {
        let d1 = new Date(a.date);
        let d2 = new Date(b.date);
        if (d1 < d2) return -1;
        else if (d1 > d2) return 1;
        else return 0;
      }
    });
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={(e) => handleClick(e)} value="date">
        Sort by Date
      </button>
      <button onClick={(e) => handleClick(e)} value="views">
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Veiws</th>
            <th>Artice</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((val) => {
            return (
              <tr>
                <td>{val.date}</td>
                <td>{val.views}</td>
                <td>{val.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;