import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  CartesianGrid,
} from "recharts";

// 🔺 Custom Triangle Shape
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = ({ fill, x, y, width, height }) => {
  if (x == null) return null;

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={fill}
    />
  );
};

// 🎨 Color palette
const COLORS = [
  "#22c55e", // green
  "#3b82f6", // blue
  "#f59e0b", // yellow
  "#ef4444", // red
  "#8b5cf6", // purple
  "#14b8a6", // teal
];

// 🎯 Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-3 border border-gray-200">
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-sm text-green-600 font-medium">
          Value: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// 📊 Main Component
const BookBarChart = ({ books = [], dataKey = "totalPages" }) => {
  
  // Transform data
  const chartData = books.map((book) => ({
    name:
      book.bookName.length > 12
        ? book.bookName.slice(0, 12) + "..."
        : book.bookName,
    value: book[dataKey],
  }));

  return (
    <div className="w-full h-65 sm:h-80 md:h-100 lg:h-113 xl:h-138">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
        >
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          {/* X Axis (Straight labels) */}
          <XAxis
            dataKey="name"
            interval={0}
            height={60}
            tick={{ fontSize: 10 }}
            tickFormatter={(value) =>
              value.length > 10 ? value.slice(0, 10) + "..." : value
            }
          />

          {/* Y Axis */}
          <YAxis tick={{ fontSize: 12 }} />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Bars */}
          <Bar
            dataKey="value"
            shape={<TriangleBar />}
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookBarChart;