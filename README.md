# Nguyễn Anh Minh - Video Editor Portfolio (ReactJS + TypeScript)

Dự án landing page portfolio chuyên nghiệp dành cho **Nguyễn Anh Minh (Video Editor)** được chuyển đổi hoàn toàn sang **React 18 + TypeScript + Vite + Tailwind CSS**.

---

## 🚀 Cách Chạy Dự Án

Dự án hiện đang chạy trực tiếp tại: **[http://localhost:3000/](http://localhost:3000/)**

Khi muốn khởi động lại dự án trong tương lai:
```bash
# 1. Mở terminal tại e:\Protfolio
# 2. Khởi chạy dev server:
npm run dev

# 3. Build sản phẩm tối ưu:
npm run build
```

---

## 📂 Cấu Trúc Mã Nguồn

```
e:\Protfolio\
├── public\
│   └── avatar.png           # Ảnh chân dung thực tế trích xuất từ CV của bạn
├── src\
│   ├── data\
│   │   └── resumeData.ts    # TOÀN BỘ THÔNG TIN CV CỦA BẠN (Dễ dàng chỉnh sửa tại đây)
│   ├── types\
│   │   └── index.ts         # Khai báo TypeScript types
│   ├── components\
│   │   ├── Navbar.tsx       # Menu điều hướng chuẩn responsive
│   │   ├── Hero.tsx         # Giới thiệu lớn, avatar, 3D Pr & Ae icons, tia sét tím
│   │   ├── Marquee.tsx      # Dải băng chạy chữ kỹ năng liên tục
│   │   ├── About.tsx        # Mục tiêu nghề nghiệp, thông tin cá nhân, thế mạnh IT + Video
│   │   ├── Skills.tsx       # Phần mềm (Premiere, CapCut, AE, PS...) & kỹ thuật Retention
│   │   ├── Experience.tsx   # Meganetwork (5th), Nhà Tốt (2th), Protean Studios (3th)
│   │   ├── Portfolio.tsx    # 4 video thực tế Nhà Tốt, kênh Aurex Remix, Ather Worship & Drive Vlog
│   │   ├── Education.tsx    # Đại học Mỏ - Địa chất (CNTT - Hệ thống thông tin)
│   │   ├── Testimonials.tsx # Đánh giá từ khách hàng & đối tác (3 box tím đặc trưng)
│   │   ├── Contact.tsx      # Form tư vấn, số điện thoại Zalo 0763 130 401, email
│   │   ├── VideoModal.tsx   # Trình phát video YouTube popup
│   │   └── Footer.tsx       # Chân trang bản quyền
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── backup-html\             # Lưu trữ an toàn các file demo HTML trước đây
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🎯 Các Thông Tin CV Đã Được Tích Hợp

1. **Thông tin cá nhân & Ảnh đại diện:** Họ tên Nguyễn Anh Minh, SĐT `0763 130 401`, Email `azminhnhi@gmail.com`, Hà Nội, ngày sinh `15/10/2003`. Ảnh avatar thực tế đã được trích xuất sắc nét vào `public/avatar.png`.
2. **Kinh nghiệm làm việc:**
   - **Meganetwork (5 tháng):** Kênh *Aurex Remix*, kênh *Ather Worship Atmosphere* và link *Drive Daily Vlog*.
   - **Nhà Tốt (2 tháng):** Nhúng trực tiếp 4 video bất động sản bạn đã dựng (`uz8hpBy9xH8`, `gzRls2NhuS4`, `ExDMBWw2UrI`, `su7UYNArlFo`) - khách bấm vào là xem ngay popup.
   - **Protean Studios Careers (3 tháng):** Frontend Developer.
3. **Học vấn:** Đại học Mỏ - Địa chất (2021 – 2026), Ngành Hệ thống thông tin (CNTT).
4. **Kỹ năng:** Dựng video Premiere Pro & CapCut, After Effects cơ bản, Sound Design, Subtitle động, Color grading REC.709, ứng dụng AI (ChatGPT, Gemini, Grok).
