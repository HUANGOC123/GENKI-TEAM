fetch('https://your-api-endpoint.com/appointments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        dob: dob,
        symptoms: symptoms,
        doctor: doctor,
        appointmentDate: appointmentDate
    })
})
.then(response => response.json())
.then(data => {
    console.log('Lịch khám đã được đăng ký:', data);
})
.catch(error => console.error('Có lỗi xảy ra:', error));
