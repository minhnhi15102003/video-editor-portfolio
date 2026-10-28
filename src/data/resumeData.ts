import { ProjectItem, ExperienceItem, SkillCategory, EducationItem } from '../types';

export const personalInfo = {
  name: 'Nguyễn Anh Minh',
  englishName: 'MINH NGUYEN',
  brandName: 'VideoAlchemist',
  role: 'Video Editor & YouTube Content Creator',
  tagline: 'Making Your Videos Look More Cool.',
  phone: '0763 130 401',
  email: 'azminhnhi@gmail.com',
  location: 'Hà Nội, Việt Nam',
  dob: '15/10/2003',
  avatarUrl: '/avatar.png',
  driveVlogUrl: 'https://drive.google.com/drive/folders/1rgVV7PIwtT6tvDABzUGa2y7wPet61fDH?usp=sharing',
  objective:
    'Trở thành Video Editor chuyên nghiệp, tập trung các nội dung sáng tạo. Không ngừng học hỏi, nâng cao kỹ năng dựng phim, motion cơ bản và ứng dụng AI trong sản xuất video. Mong muốn phát triển thành người tạo nội dung có tư duy hình ảnh và khả năng tối ưu trải nghiệm người xem.',
  aboutDetailed:
    'Chào bạn, tôi là Nguyễn Anh Minh — Video Editor với nền tảng Công nghệ thông tin từ Đại học Mỏ - Địa chất. Tôi kết hợp tư duy công nghệ nhạy bén cùng niềm đam mê kể chuyện qua hình ảnh để biến những thước phim thô thành các sản phẩm hoàn thiện, cuốn hút và tối ưu trải nghiệm người xem trên YouTube & Short-form.',
  stats: [
    { label: 'Tháng Thực Chiến', value: '8+ Tháng' },
    { label: 'Dự Án Đã Hoàn Thành', value: '30+ Videos' },
    { label: 'Kênh YouTube Phát Triển', value: '3+ Kênh' },
    { label: 'Tốc Độ Bàn Giao Draft', value: '24 - 48H' },
  ],
};

export const skillsSoftware: SkillCategory[] = [
  {
    title: 'Adobe Premiere Pro',
    subtitle: 'Offline Cutting & Master Workflow',
    percentage: 95,
    description: 'Cắt dựng nhịp nhàng, multicam, sắp xếp bố cục, L-cut & J-cut, đồng bộ âm thanh đa luồng và tối ưu xuất file chuẩn 4K YouTube.',
    icon: 'Pr',
    color: '#9999ff',
  },
  {
    title: 'CapCut Pro',
    subtitle: 'Viral Shorts / TikTok / Reels',
    percentage: 90,
    description: 'Bắt nhịp trend nhanh, phụ đề tự động kết hợp kinetic text, tốc độ xử lý nhanh đáp ứng nhu cầu ra video liên tục hàng ngày.',
    icon: 'Cp',
    color: '#06b6d4',
  },
  {
    title: 'Adobe After Effects',
    subtitle: 'Motion cơ bản, GEOlayers 3 & Saber',
    percentage: 75,
    description: 'Chuyển động bản đồ trực quan với GEOlayers 3, hiệu ứng tia sáng năng lượng Saber, motion tracking gắn text vào chuyển động, intro/outro và lower thirds.',
    icon: 'Ae',
    color: '#d291ff',
  },
  {
    title: 'Adobe Photoshop & Canva',
    subtitle: 'Design Thumbnail & Graphic Assets',
    percentage: 85,
    description: 'Thiết kế Thumbnail YouTube bắt mắt tăng tỷ lệ click (CTR), cắt tách phôi nhân vật, viền sáng và dàn layout minh họa cho video.',
    icon: 'Ps',
    color: '#31a8ff',
  },
  {
    title: 'Color Grading & Look Dev',
    subtitle: 'Chỉnh màu Rec.709 & Moody Look',
    percentage: 80,
    description: 'Cân bằng sáng tối, cân bằng trắng, xử lý màu da (skin-tone) tự nhiên và phủ LUT tone màu phù hợp với tinh thần từng thể loại clip.',
    icon: 'palette',
    color: '#f59e0b',
  },
  {
    title: 'Ứng Dụng AI Vào Sản Xuất',
    subtitle: 'ChatGPT, Gemini, Grok',
    percentage: 90,
    description: 'Tận dụng AI để lên ý tưởng kịch bản, viết hook 3 giây đầu giữ chân, tối ưu tiêu đề YouTube và tìm kiếm âm thanh/footage thông minh.',
    icon: 'sparkles',
    color: '#a855f7',
  },
];

export const coreTechniques = [
  {
    title: 'Retention Pacing & Nhịp Dựng',
    description: 'Cắt gọt nhịp điệu dứt khoát 1.5 - 2s/lần, kết hợp hiệu ứng Punch-in Zoom đổi góc máy liên tục giúp người xem không bị nhàm chán.',
    icon: 'fa-solid fa-bolt',
    color: '#a855f7',
  },
  {
    title: 'Sound Design & SFX Đắt Giá',
    description: 'Lồng ghép Whoosh, Riser, Impact, Pop, Cash register và nhạc nền ăn khớp với từng hành động, nâng cao cảm xúc người xem.',
    icon: 'fa-solid fa-volume-high',
    color: '#f59e0b',
  },
  {
    title: 'Animated Subtitles & Minh Họa',
    description: 'Phụ đề nhảy chữ Karaoke động theo giọng nói, phối màu highlight từ khóa quan trọng và chèn hình minh họa trực quan.',
    icon: 'fa-solid fa-closed-captioning',
    color: '#10b981',
  },
  {
    title: 'Kể Chuyện Bằng Video (Storytelling)',
    description: 'Tư duy cấu trúc video có mở đầu gây tò mò (Hook), thân bài mạch lạc và kết bài kêu gọi hành động (CTA) rõ ràng.',
    icon: 'fa-solid fa-film',
    color: '#06b6d4',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Meganetwork',
    role: 'Video Editor & YouTube Content',
    duration: '5 tháng',
    period: '2023 - 2024',
    description: [
      'Xây dựng và quản trị kênh YouTube với các chủ đề đa dạng, hướng đến nhiều nhóm khán giả khác nhau.',
      'Dựng và hoàn thiện video từ footage/raw material đến sản phẩm cuối, đảm bảo nhịp dựng, âm thanh, hình ảnh và trải nghiệm người xem.',
      'Tham gia định hướng, phát triển format nội dung phù hợp với từng kênh.',
      'Quản lý workflow sản xuất video, phối hợp các công đoạn từ ý tưởng đến hoàn thiện.',
    ],
    projects: [
      { name: 'Kênh Aurex Remix', url: 'https://www.youtube.com/@AurexRemix' },
      { name: 'Kênh Ather Worship Atmosphere', url: 'https://www.youtube.com/@AtherAtmosphere/videos' },
      { name: 'Drive Daily Vlog Hoàn Thiện', url: 'https://drive.google.com/drive/folders/1rgVV7PIwtT6tvDABzUGa2y7wPet61fDH?usp=sharing' },
    ],
  },
  {
    company: 'Nhà Tốt',
    role: 'Video Editor',
    duration: '2 tháng',
    period: '2024',
    description: [
      'Dựng video trong lĩnh vực bất động sản, property tour và giới thiệu dự án cao cấp.',
      'Cắt ghép footage, sắp xếp bố cục, chèn text/hình minh họa và nhạc nền sang trọng.',
      'Tối ưu video theo format YouTube, chú trọng nhịp dựng và trải nghiệm người xem bất động sản.',
      'Hoàn thiện file xuất chất lượng cao và quy trình đăng tải video lên kênh.',
    ],
  },
  {
    company: 'Protean Studios Careers',
    role: 'Frontend Developer (Intership/Part-time)',
    duration: '3 tháng',
    period: '2023',
    description: [
      'Hỗ trợ xây dựng và chỉnh sửa giao diện web bằng HTML, CSS, JavaScript/React.',
      'Rèn luyện tư duy công nghệ, khả năng tự học và làm việc hiệu quả với các công cụ số.',
      'Nền tảng IT vững chắc giúp Anh Minh am hiểu sâu về trải nghiệm người dùng (UX) và thuật toán nền tảng.',
    ],
  },
];

export const education: EducationItem = {
  school: 'Đại học Mỏ - Địa chất',
  major: 'Công nghệ thông tin (Chuyên ngành Hệ thống thông tin)',
  period: '2021 – 2026',
  description: [
    'Tốt nghiệp cử nhân chuyên ngành Hệ thống thông tin.',
    'Định hướng phát triển chuyên sâu về Multimedia, Video Production và ứng dụng Trí tuệ Nhân tạo trong sáng tạo nội dung.',
  ],
};

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'nhatot-1',
    title: 'Property Tour: Khám Phá Căn Hộ Chung Cư Cao Cấp',
    category: 'real-estate',
    categoryLabel: 'Bất Động Sản • Nhà Tốt',
    youtubeId: 'uz8hpBy9xH8',
    thumbnail: 'https://img.youtube.com/vi/uz8hpBy9xH8/maxresdefault.jpg',
    description: 'Dựng video tour nhà thực tế cho Nhà Tốt: Xử lý màu sắc ánh sáng nội thất, chèn text thông số căn hộ và nhạc nền nhẹ nhàng.',
    highlights: ['Nhà Tốt Video', 'Property Tour', 'Text Motion', 'B-Roll Sync'],
  },
  {
    id: 'nhatot-2',
    title: 'Review Dự Án & Không Gian Sống Tiện Nghi',
    category: 'real-estate',
    categoryLabel: 'Bất Động Sản • Nhà Tốt',
    youtubeId: 'gzRls2NhuS4',
    thumbnail: 'https://img.youtube.com/vi/gzRls2NhuS4/maxresdefault.jpg',
    description: 'Video giới thiệu toàn cảnh tiện ích dự án: Cắt nhịp dynamic theo nhạc, hiệu ứng zoom-in chi tiết và hạ nhạc thông minh khi thuyết minh.',
    highlights: ['Nhà Tốt Video', 'Review Chi Tiết', 'Sound Mixing', 'L-Cut / J-Cut'],
  },
  {
    id: 'nhatot-3',
    title: 'Khảo Sát Thực Tế Khu Đô Thị Hiện Đại',
    category: 'real-estate',
    categoryLabel: 'Bất Động Sản • Nhà Tốt',
    youtubeId: 'ExDMBWw2UrI',
    thumbnail: 'https://img.youtube.com/vi/ExDMBWw2UrI/maxresdefault.jpg',
    description: 'Biên tập cảnh flycam, b-roll không gian sống xanh, chuyển cảnh mượt mà và làm nổi bật giá trị cốt lõi của bất động sản.',
    highlights: ['Nhà Tốt Video', 'Flycam Footage', 'Color Correction', 'Pacing Mượt'],
  },
  {
    id: 'nhatot-4',
    title: 'Tư Vấn Chọn Mua Nhà Đẹp Giá Hợp Lý',
    category: 'real-estate',
    categoryLabel: 'Bất Động Sản • Nhà Tốt',
    youtubeId: 'su7UYNArlFo',
    thumbnail: 'https://img.youtube.com/vi/su7UYNArlFo/maxresdefault.jpg',
    description: 'Định dạng video chia sẻ kinh nghiệm: Chèn bảng giá đồ họa, subtitle trực quan và chèn tiếng SFX tăng độ tập trung người xem.',
    highlights: ['Nhà Tốt Video', 'Infographic Text', 'Retention Cut', 'Vocal Cleanup'],
  },
  {
    id: 'aurex-remix',
    title: 'Kênh Âm Nhạc Aurex Remix (Quản trị & Dựng)',
    category: 'remix',
    categoryLabel: 'YouTube Channel • Meganetwork',
    url: 'https://www.youtube.com/@AurexRemix',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Dựng visualizer và video âm nhạc điện tử sôi động, sync hiệu ứng bass drop, ánh sáng neon và chuyển cảnh theo từng nhịp trống.',
    highlights: ['Kênh Triệu View', 'Audio Visualizer', 'Beat Sync', 'Thumbnail Design'],
  },
  {
    id: 'ather-worship',
    title: 'Kênh Không Gian Thư Giãn Ather Worship Atmosphere',
    category: 'worship',
    categoryLabel: 'YouTube Channel • Meganetwork',
    url: 'https://www.youtube.com/@AtherAtmosphere/videos',
    thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80',
    description: 'Biên tập video âm nhạc không gian lắng đọng: Phân loại màu điện ảnh nhẹ nhàng, vòng lặp footage mượt mà và tạo cảm giác bình yên.',
    highlights: ['Atmosphere Vibe', 'Color Grading', 'Loop Editing', 'Sound Mastering'],
  },
];

export const testimonials = [
  {
    name: 'LEAD EDITOR',
    role: 'Meganetwork Channel Manager',
    quote: 'Minh có tư duy bắt nhịp nhạc và xử lý raw footage rất nhanh. Bạn luôn chủ động tìm tòi công cụ mới và phối hợp nhịp nhàng với team kịch bản.',
  },
  {
    name: 'MARKETING TEAM',
    role: 'Nhà Tốt Real Estate Project',
    quote: 'Các video bất động sản Minh dựng có nhịp độ rất chuẩn YouTube, màu sắc sáng và đồ họa text thể hiện thông tin giá nhà rất chuyên nghiệp.',
  },
  {
    name: 'CREATIVE DIRECTOR',
    role: 'Đối tác sáng tạo nội dung',
    quote: 'Làm việc với Minh rất yên tâm về deadline. Bạn tiếp thu feedback nhanh, sửa đổi cẩn thận và có tư duy công nghệ IT giúp workflow chạy cực mượt.',
  },
];

