const translations = {
    VN: {
        mainTitle: "Hệ Thống Dành Cho Bác Sĩ",
        navHome: "Trang Chủ",
        navPatientManagement: "Quản Lý Bệnh Nhân",
        navSchedule: "Lịch Làm Việc",
        navTools: "Công Cụ Hỗ Trợ",
        welcomeMessage: "Chào Mừng, Bác Sĩ!",
        introText: "Dưới đây là các công cụ hỗ trợ công việc của bạn:",
        toolPatientRecords: "Quản Lý Hồ Sơ Bệnh Nhân",
        toolAppointments: "Đặt Lịch Hẹn Khám",
        toolDiagnostics: "Công Cụ Chẩn Đoán",
        toolPrescriptions: "Quản Lý Đơn Thuốc",
        toolHealthAlerts: "Cảnh Báo Sức Khỏe",
        toolReports: "Báo Cáo & Phân Tích",
        toolInteraction: "Hỗ Trợ Tương Tác",
        toolMedicalResources: "Tài Liệu Y Khoa",
        toolEmergency: "Tai Nạn Khẩn Cấp",
        footerText: "&copy; 2024 Hệ Thống Sức Khỏe. Mọi quyền được bảo lưu."
    },
    JP: {
        mainTitle: "医師用システム",
        navHome: "ホーム",
        navPatientManagement: "患者管理",
        navSchedule: "勤務スケジュール",
        navTools: "サポートツール",
        welcomeMessage: "ようこそ、先生！",
        introText: "以下はあなたの作業を支援するツールです:",
        toolPatientRecords: "患者記録管理",
        toolAppointments: "予約管理",
        toolDiagnostics: "診断ツール",
        toolPrescriptions: "処方管理",
        toolHealthAlerts: "健康警報",
        toolReports: "レポートと分析",
        toolInteraction: "相互作用サポート",
        toolMedicalResources: "医学リソース",
        toolEmergency: "緊急事故",
        footerText: "&copy; 2024 医療システム. 全著作権所有."
    }
};

let currentLanguage = "VN";

function switchLanguage() {
    currentLanguage = currentLanguage === "VN" ? "JP" : "VN";
    const elements = document.querySelectorAll("[id]");

    elements.forEach((el) => {
        const id = el.id;
        if (translations[currentLanguage][id]) {
            el.innerHTML = translations[currentLanguage][id];
        }
    });
}

function navigateTo(page) {
    window.location.href = page;
}

function handleEmergency() {
    alert(currentLanguage === "VN" 
        ? "Đang gọi cấp cứu và thông báo cho người thân..." 
        : "緊急通報中、家族に通知しています...");
}
