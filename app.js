// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();
tg.disableVerticalSwipes();

// Переключение страниц
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  
  // Обновляем цвет шапки в Telegram
  if (pageId === 'home') {
    tg.setHeaderColor('#212121');
  } else {
    tg.setHeaderColor('#181818');
  }
}

// Нажатие на категорию
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    document.getElementById('catalog-title').textContent = category;
    loadProducts(category);
    showPage('catalog');
  });
});

// Кнопка "Корзина"
document.getElementById('cart-btn').addEventListener('click', () => {
  loadCart();
  showPage('cart');
});

// Заглушки
function loadProducts(category) {
  document.getElementById('products-list').innerHTML = `
    <div class="product-card">
      <div class="product-image">📷</div>
      <div class="product-info">
        <h3 class="product-name">${category} Пример</h3>
        <div class="product-price">850 ₽</div>
        <button class="add-to-cart-btn" onclick="alert('Добавлено!')">В корзину</button>
      </div>
    </div>
  `;
}

function loadCart() {
  document.getElementById('cart-total').textContent = 'Итого: 0 ₽';
  document.getElementById('cart-items').innerHTML = '<p>Корзина пуста</p>';
}

// Инициализация
showPage('home');