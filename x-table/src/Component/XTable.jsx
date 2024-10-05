import { useState } from "react"

const XTable = ({data}) => {
    const [sortedData, setSortedData] = useState(data);

    const handleSortByViews = () => {
        const sorted = [...sortedData].sort((a, b) => {
            if(a.views !== b.views) {
                return b.views - a.views;
            } else  {
                return new Date(b.date) - new Date(a.date);
            }
        })

        setSortedData(sorted);
    }

    const handleSortByDate = () => {
        const sorted = [...data].sort((a, b) => {
            if (new Date(a.date) !== new Date(b.date)) {
              return new Date(b.date) - new Date(a.date); 
            } else {
              return b.views - a.views; 
            }
          })
        setSortedData(sorted);        
    }

  return (
    <div>
        <h1>Date and Views Table</h1>

        <div className="table-content">
            <div className="sort-table">
                <button onClick={handleSortByDate}>Sort by Date</button>
                <button onClick={handleSortByViews}>Sort by Views</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                {sortedData.map((item, id) => (
              <tr key={id}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default XTable