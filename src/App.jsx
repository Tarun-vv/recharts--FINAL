import AreaGraph from "./graphs/AreaGraph";
import BarGraph from "./graphs/BarGraph";
import CircularGraph from "./graphs/CircularGraph";
import LineGraph from "./graphs/LineGraph";
import PieGraph from "./graphs/PieGraph";

function App() {
  return (
    <div>
      <h2>Recharts</h2>

      {/* NOTE: pass in your data in data and set a height and width */}
      <h2>Area Graph</h2>
      <AreaGraph />

      <h2>Circular graph</h2>
      <CircularGraph />

      <h2>Popularity Chart</h2>
      <LineGraph />

      <h2>Pie chart</h2>
      <PieGraph />

      <h2>Bar Chart</h2>
      <BarGraph />
    </div>
  );
}

export default App;
