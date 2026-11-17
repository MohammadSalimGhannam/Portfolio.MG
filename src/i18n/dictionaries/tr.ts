import type { Dictionary } from "../types";

export const tr: Dictionary = {
  language: {
    name: "Türkçe",
    dir: "ltr",
    dateLocale: "tr-TR",
  },
  seo: {
    title: "Mohammad Ghannam, yazılım mühendisi",
    description:
      "Web geliştirme, yapay zekâ, robotik ve veri analizi alanlarında çalışan yazılım mühendisi. Halep Üniversitesi Bilişim Mühendisliği mezunu.",
  },
  common: {
    skipToContent: "İçeriğe geç",
    mainNav: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
    switchToDark: "Koyu temaya geç",
    switchToLight: "Açık temaya geç",
    backToTop: "Başa dön",
    present: "Devam ediyor",
  },
  nav: {
    about: "Hakkımda",
    experience: "Deneyim",
    projects: "Projeler",
    skills: "Yetenekler",
    education: "Eğitim",
    contact: "İletişim",
  },
  hero: {
    name: "Mohammad Ghannam",
    role: "Yazılım Mühendisi",
    lead: "Web uygulamaları, bilgisayarlı görü sistemleri ve robotik yazılımlar geliştiriyor, veri analizi eğitimi veriyorum. Halep Üniversitesi Bilişim Mühendisliği mezunuyum ve Yapay Zekâ bölümünü birincilikle bitirdim.",
    location: "Sakarya, Türkiye",
    contactCta: "İletişime geç",
    githubCta: "GitHub",
    photoAlt: "Mohammad Ghannam'ın portresi",
  },
  about: {
    title: "Hakkımda",
    paragraphs: [
      "Halep Üniversitesi Bilişim Mühendisliği mezunu bir yazılım mühendisiyim. Yapay Zekâ bölümünü birincilikle, sınıfımı ise üçüncülükle bitirdim.",
      "Çalışmalarım birkaç alana yayılıyor: React, Next.js ve TypeScript ile front-end geliştirme, YOLOv8 ve OpenCV ile bilgisayarlı görü, ROS2 ile robotik ve şu anda 100'den fazla öğrenciye öğrettiğim Python ile veri analizi.",
      "Sakarya Üniversitesi'nde Yapay Zekâ yüksek lisansı için Türkiye Bursları kazandım. Program 2027'de başlamadan önce Türkçe hazırlık yılını tamamlıyorum.",
    ],
    facts: [
      { label: "Konum", value: "Sakarya, Türkiye" },
      {
        label: "Diller",
        value: "Arapça (ana dil), İngilizce (B2), Türkçe (A1, öğreniyorum)",
      },
      { label: "Sırada", value: "Yapay Zekâ yüksek lisansı, Sakarya Üniversitesi, 2027" },
    ],
  },
  experience: {
    title: "Deneyim",
    kinds: {
      work: "İş",
      training: "Eğitim programı",
      volunteering: "Gönüllülük",
    },
    items: {
      teknova: {
        role: "Veri Analizi Eğitmeni",
        org: "TEKNOVA",
        meta: "",
        points: [
          "Gerçek problemler üzerine kurulu, proje tabanlı bir müfredatla 100'den fazla öğrenciye Python, pandas ve NumPy kullanarak veri analizi öğretiyorum.",
          "Öğrencilere makine öğrenmesine hazırlık olarak veri ön işleme, veri temizleme ve keşifsel veri analizi dahil tüm veri sürecinde rehberlik ediyorum.",
          "Model eğitimi, değerlendirme metrikleri ve hiperparametre ayarını kapsayan tahminsel modelleme dersleri veriyorum.",
        ],
      },
      altinkey: {
        role: "Front-End Geliştirici",
        org: "ALTINKEY",
        meta: "Tam zamanlı, ofiste",
        points: [
          "Next.js ve TypeScript ile, özellikleri ve durum yönetimini modüler tutmak için Feature-Sliced Design mimarisiyle yapılandırılmış bir yapay zekâ ajanları paneli geliştirdim.",
          "Hassas verileri koruyan ve arayüzü kullanıcının rolüne göre gösteren JWT tabanlı giriş ve rol tabanlı erişim kontrolü (RBAC) sistemi uyguladım.",
          "Gereksiz yeniden render'ları kaldırıp render mantığını iyileştirerek uygulamanın performans puanını 60'tan 95'e çıkardım.",
        ],
      },
      bluebits: {
        role: "Takım Lideri, Teknik Sorumlu ve Çevirmen",
        org: "Blue Bits Takımı, Halep Üniversitesi",
        meta: "",
        points: [
          "Ders materyallerini güncelleyen, ders notlarını PDF ve videoya dönüştüren, içerikleri Arapçaya çeviren ve akademik soru-cevap oturumları düzenleyen bir öğrenci takımını yönettim.",
        ],
      },
      shai: {
        role: "Veri Bilimi Programı Katılımcısı",
        org: "SHAI for AI",
        meta: "",
        points: [
          "Python, veri analizi, makine öğrenmesi ve derin öğrenmeyi kapsayan, pratik takım projeleriyle değerlendirilen 90 saatlik bir programı tamamladım.",
        ],
      },
    },
  },
  projects: {
    title: "Projeler",
    links: {
      code: "Kod",
      live: "Canlı demo",
      app: "Uygulama kodu",
      model: "Model kodu",
    },
    items: {
      ev3Mapping: {
        title: "EV3 robot sürüsüyle haritalama",
        kind: "Bitirme projesi",
        summary:
          "Kızılötesi sensörlü LEGO EV3 robotlarının bir alanı gerçek zamanlı olarak haritaladığı çoklu robot SLAM sistemi. Robot kontrolü, iletişim ve birden fazla yerel haritayı tek bir genel haritada birleştirmek için Python ile özel ROS2 düğümleri yazdım.",
      },
      roadEye: {
        title: "RoadEye: gerçek zamanlı yol analizi",
        kind: "Dördüncü sınıf projesi, takım",
        summary:
          "Araçları YOLOv8 ve OpenCV ile tespit edip takip eden, her aracın hızını, yönünü ve kat ettiği mesafeyi tahmin eden bir bilgisayarlı görü sistemi. Sonuçlar pandas ve Seaborn ile analiz edilip Django destekli bir React arayüzünde gösteriliyor.",
      },
      dentalClinic: {
        title: "Diş kliniği yönetim sistemi",
        kind: "Kişisel proje",
        summary:
          "Hasta kayıtları, randevu planlama ve faturalandırma için tek başıma tasarlayıp geliştirdiğim ve GitHub Pages'te yayınladığım bir web sistemi.",
      },
      familyTree: {
        title: "FamilyTree",
        kind: "Takım projesi",
        summary:
          "Aile ilişkilerini hiyerarşik olarak gösteren, kullanıcı girişi ve aile verilerini yönetmek için yönetici rolleri içeren bir web sitesi.",
      },
      portfolio: {
        title: "Portfolyo sitesi",
        kind: "Kişisel proje",
        summary:
          "Bu site: Next.js, TypeScript ve Tailwind CSS ile yapılmış, açık ve koyu temalı, çok dilli statik bir portfolyo.",
      },
      knowledge: {
        title: "Knowledge",
        kind: "Ders projesi",
        summary:
          "Multimedya dersi için geliştirilmiş, duyarlı tasarıma sahip etkileşimli bir eğitim sitesi.",
      },
    },
  },
  skills: {
    title: "Yetenekler",
    groups: {
      programming: "Programlama dilleri",
      web: "Web geliştirme",
      ai: "Veri bilimi ve yapay zekâ",
      robotics: "Robotik",
      foundations: "Temeller ve araçlar",
    },
  },
  education: {
    title: "Eğitim",
    degreesTitle: "Diplomalar",
    honoursTitle: "Ödüller ve başarılar",
    certificatesTitle: "Sertifikalar",
    verify: "Doğrula",
    degrees: {
      msc: {
        degree: "Yapay Zekâ Yüksek Lisansı",
        school: "Sakarya Üniversitesi, Türkiye",
        period: "2027'den itibaren",
        note: "Türkiye Bursları ile kabul edildim. Şu anda gerekli Türkçe hazırlık yılını tamamlıyorum (2026–2027).",
      },
      bsc: {
        degree: "Bilişim Mühendisliği Lisansı, Yapay Zekâ Bölümü",
        school: "Halep Üniversitesi, Suriye",
        period: "2020–2025",
        note: "Not ortalaması 88,25/100 (pekiyi). Yapay Zekâ bölümü birincisi ve sınıf üçüncüsü.",
      },
      secondary: {
        degree: "Lise Diploması, Fen Bölümü",
        school: "Halep, Suriye",
        period: "2020",
        note: "Not ortalaması: %94.",
      },
    },
    honours: {
      scholarship: {
        title: "Türkiye Bursları, tam burslu yüksek lisans",
        by: "Türkiye Cumhuriyeti",
      },
      ranking: {
        title: "Yapay Zekâ bölümü birinciliği, genel sıralamada üçüncülük",
        by: "Halep Üniversitesi",
      },
    },
  },
  contact: {
    title: "İletişim",
    heading: "İletişime geçin",
    text: "Formdan mesaj gönderebilir ya da bana doğrudan e-posta veya aşağıdaki platformlar üzerinden ulaşabilirsiniz.",
    emailLabel: "E-posta",
    locationLabel: "Konum",
    form: {
      name: "Ad soyad",
      email: "E-posta",
      message: "Mesaj",
      send: "Mesajı gönder",
      sending: "Gönderiliyor…",
      success: "Mesaj gönderildi. Girdiğiniz e-posta adresine yanıt vereceğim.",
      error: "Mesaj gönderilemedi. Tekrar deneyin ya da bana doğrudan e-posta gönderin.",
    },
  },
  footer: {
    builtWith: "Next.js, TypeScript ve Tailwind CSS ile yapıldı.",
  },
};
