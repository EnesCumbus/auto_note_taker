<div align="left">

# 📝 Otomatik Not Alıcı 🚀

Seçtiğiniz metinleri otomatik olarak kaydedip notlarınızı organize etmenize yardımcı olan bir Chrome uzantısı! ✨

## 🌟 Özellikler

- 🌟 **Metin Seçimiyle Not Alma**: Web üzerinde seçtiğiniz metinleri hızlıca not olarak kaydedin.
- 🗂️ **Notları Listeleme**: Kaydedilen tüm notları bir arayüzde görüntüleyin.
- 🗑️ **Notları Temizleme**: Tek bir tıklamayla tüm notları silin.
- 💾 **Dosyaya Kaydetme**: Notlarınızı bir `.txt` dosyası olarak indirin.

## 🖼️ Görseller

<div class="slider-container" style="width: 100%; max-width: 500px; overflow: hidden; position: relative; margin: 20px 0;">
  <div class="slides" style="display: flex; transition: transform 0.5s ease-in-out;">
    <img src="https://github.com/user-attachments/assets/ac15e359-d4e3-4a37-85d2-17822fe4dc75" alt="Ekran görüntüsü 1" style="width: 100%; flex-shrink: 0;">
    <img src="https://github.com/user-attachments/assets/a656febb-fd88-41bf-8ddf-3d2e4786de37" alt="Ekran görüntüsü 2" style="width: 100%; flex-shrink: 0;">
    <img src="https://github.com/user-attachments/assets/654980ce-003c-4043-8d48-7070d4cdd504" alt="Ekran görüntüsü 3" style="width: 100%; flex-shrink: 0;">
  </div>
  <button onclick="prevSlide()" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; cursor: pointer; padding: 10px;">❮</button>
  <button onclick="nextSlide()" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; cursor: pointer; padding: 10px;">❯</button>
</div>

<script>
let currentIndex = 0;

function updateSlider() {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  currentIndex = (currentIndex + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  currentIndex--;
  updateSlider();
}

function nextSlide() {
  currentIndex++;
  updateSlider();
}

document.addEventListener('DOMContentLoaded', updateSlider);
</script>

## 🛠️ Kurulum

1. Bu projeyi **klonlayın** veya indirin. 📥
2. Chrome tarayıcınızı açın ve şu adrese gidin: `chrome://extensions/`. 🌐
3. Sağ üst köşede **Geliştirici Modu**'nu aktif edin. 🛠️
4. **Paketlenmemiş uzantı yükle** butonuna tıklayın ve bu uzantının olduğu klasörü seçin. 📂

## 🚀 Kullanım

1. Uzantıyı yükledikten sonra sağ tıklayarak **"Save Selection as Note"** seçeneğini kullanın. 📋
2. Kaydedilen notlarınızı görmek için uzantının simgesine tıklayın. 🖱️
3. Notlarınızı temizlemek için **"Clear All Notes"** butonunu kullanın. 🗑️
4. Notlarınızı bir dosyaya indirmek için **"Save to File"** butonuna tıklayın. 💾

## 🤝 Katkıda Bulunun

🛠️ Bu projeyi fork'layarak geliştirmeler yapabilir, pull request ile katkıda bulunabilirsiniz. 💡

---

💻 **Keyifli Kodlamalar!**

</div>
