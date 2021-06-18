export default function(elName) {
    if (typeof elName != 'string') return false;
    const el = document.getElementById(elName);
    if (el == null || el == undefined) return false;
    const data = {
        categories: ['T-shirt', 'Pants', 'hat'],
        series: [{
                name: 'Budget',
                data: [5000, 3000, 5000],
            },
            {
                name: 'Income',
                data: [8000, 4000, 7000],
            }
        ]
    };
    const options = {
        chart: { width: 700, height: 400 },
    };

    if (chartType == 'line') toastui

    toastui.chart.barChart({ el, data, options });
    return true;
}