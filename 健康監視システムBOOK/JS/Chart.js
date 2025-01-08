// Dữ liệu mẫu cho biểu đồ
const ctx = document.getElementById('healthChart').getContext('2d');
const healthChart = new Chart(ctx, {
    type: 'line', // Hoặc 'bar', 'pie', v.v.
    data: {
        labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'], // Các ngày theo dõi
        datasets: [{
            label: 'Số bước đi',
            data: [1000, 3000, 2000, 4000, 5000], // Dữ liệu mẫu cho số bước
            borderColor: '#42a5f5',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
