# 🤝 Panduan Kontribusi - Utami Food Website

Terima kasih sudah tertarik untuk berkontribusi pada proyek **Utami Food Website**! 
Berikut adalah panduan untuk membantu Anda mulai berkontribusi.

---

## 📋 Cara Berkontribusi

### 1. Fork Repository
Klik tombol **Fork** di halaman repositori untuk membuat salinan di akun GitHub Anda.

### 2. Clone ke Lokal
```bash
git clone https://github.com/username-anda/utami-food-website.git
cd utami-food-website
```

### 3. Buat Branch Baru
```bash
git checkout -b fitur/nama-fitur-anda
```

### 4. Lakukan Perubahan
Buat perubahan yang diperlukan pada kode.

### 5. Commit Perubahan
```bash
git add .
git commit -m "feat: deskripsi singkat perubahan"
```

### 6. Push ke GitHub
```bash
git push origin fitur/nama-fitur-anda
```

### 7. Buat Pull Request
Buka repositori asli dan klik **New Pull Request**.

---

## 📏 Standar Kode

### HTML
- Gunakan indentasi **4 spasi**
- Selalu sertakan atribut `alt` pada tag `<img>`
- Gunakan tag semantik HTML5

### CSS
- Gunakan variabel CSS yang sudah didefinisikan di `:root`
- Hindari penggunaan `!important` kecuali benar-benar diperlukan
- Kelompokkan style berdasarkan komponen

### JavaScript
- Gunakan `const` dan `let` daripada `var`
- Tambahkan komentar untuk fungsi yang kompleks
- Hindari `console.log()` di kode produksi

## 📝 Format Commit Message

Gunakan format berikut:
```
tipe(scope): deskripsi singkat

Contoh:
feat(menu): tambah menu baru nasi goreng
fix(navbar): perbaiki dropdown tidak bisa diklik di mobile
style(css): perbaiki warna tombol hover
docs(readme): update cara instalasi
```

### Tipe yang Digunakan:
| Tipe | Deskripsi |
|------|-----------|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `style` | Perubahan style/CSS |
| `docs` | Perubahan dokumentasi |
| `refactor` | Refactoring kode |
| `chore` | Tugas maintenance |

---

## ❓ Pertanyaan?

Jika ada pertanyaan, silakan buka **Issue** di repositori ini.

---

*Terima kasih atas kontribusi Anda! 🙏*
