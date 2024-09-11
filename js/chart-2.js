const {PieChart, Pie, Cell, ResponsiveContainer} = Recharts;
const data = [
    {name: 'Entertainment', value: 300},
    {name: 'Bill Expense', value: 150},
    {name: 'Investment', value: 200},
    {name: 'Others', value: 350},
];
const COLORS = ['#343C6A', '#FC7900', '#FA00FF', '#1814F3'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx,
                                   cy,
                                   midAngle,
                                   innerRadius,
                                   outerRadius,
                                   percent,
                                   index
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            style={{fontSize: '10px'}}>

            <tspan x={x} dy="-10">{`${(percent * 100).toFixed(0)}%`}</tspan>
            <tspan x={x} dy="12">{data[index].name}</tspan>
            {}
        </text>
    );
};

function Example() {
    return (
        <ResponsiveContainer width="100%" height={280}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={0}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

ReactDOM.render(<Example/>, document.getElementById('chart-2'));