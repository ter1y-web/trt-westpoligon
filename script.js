// ==========================================================================
// НАСТРОЙКИ ПАРТНЕРСКОЙ ПРОГРАММЫ ТRТ
// ==========================================================================
const PARTNER_MARKER = '527581'; // Ваш ID маркера Aviasales
const API_TOKEN = '32044c7b11d3319360d5b12879ef796a'; // Базовый токен для проверки

// Массив данных по 20 направлениям ДФО
const dfoRoutes = [
    { from: 'YKS', to: 'VVO', fromName: 'Якутск', toName: 'Владивосток', type: 'plane', subsidy: 'Есть (Молодежь)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Якутия' },
    { from: 'KHV', to: 'UUS', fromName: 'Хабаровск', toName: 'Южно-Сахалинск', type: 'plane', subsidy: 'Есть (Для всех)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Сахалин' },
    { from: 'PKC', to: 'GDX', fromName: 'Петропавловск-К.', toName: 'Магадан', type: 'plane', subsidy: 'Есть (ДФО)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Камчатка' },
    { from: 'MJZ', to: 'OVB', fromName: 'Мирный', toName: 'Новосибирск', type: 'plane', subsidy: '—', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Мирный' },
    { from: 'BQS', to: 'HTA', fromName: 'Благовещенск', toName: 'Чита', type: 'plane', subsidy: 'Есть (Пенсионеры)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Амур' },
    { from: 'UUD', to: 'KHV', fromName: 'Улан-Удэ', toName: 'Хабаровск', type: 'plane', subsidy: 'Есть (Для всех)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Бурятия' },
    { from: 'NER', to: 'SVO', fromName: 'Нерюнгри', toName: 'Москва', type: 'plane', subsidy: 'Есть (Молодежь)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Якутия' },
    { from: 'DYR', to: 'PWE', fromName: 'Анадырь', toName: 'Певек', type: 'plane', subsidy: '—', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Чукотка' },
    { from: 'UUS', to: 'ITU', fromName: 'Южно-Сахалинск', toName: 'Курильск', type: 'plane', subsidy: 'Есть (Местные)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Курилы' },
    { from: 'UUS', to: 'DEE', fromName: 'Южно-Сахалинск', toName: 'Южно-Курильск', type: 'plane', subsidy: 'Есть (Местные)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Курилы' },
    { from: 'KXK', to: 'UUS', fromName: 'Комсомольск', toName: 'Южно-Сахалинск', type: 'plane', subsidy: 'Есть (ДФО)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Хабаровск' },
    { from: 'UUS', to: 'OHH', fromName: 'Южно-Сахалинск', toName: 'Оха', type: 'plane', subsidy: 'Есть (Местные)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Сахалин' },
    { from: 'NLI', to: 'KHV', fromName: 'Николаевск', toName: 'Хабаровск', type: 'plane', subsidy: 'Есть (ДФО)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Хабаровск' },
    { from: 'HTA', to: 'VVO', fromName: 'Чита', toName: 'Владивосток', type: 'plane', subsidy: 'Есть (Молодежь)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Забайкалье' },
    { from: 'TLK', to: 'IKT', fromName: 'Талакан', toName: 'Иркутск', type: 'plane', subsidy: '—', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Мирный' },
    { from: 'TYD', to: 'KHV', fromName: 'Тында', toName: 'Хабаровск', type: 'plane', subsidy: 'Есть (Для всех)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Амур' },
    { from: 'PWE', to: 'SVO', fromName: 'Певек', toName: 'Москва', type: 'plane', subsidy: '—', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Чукотка' },
    { from: 'GDX', to: 'VVO', fromName: 'Магадан', toName: 'Владивосток', type: 'plane', subsidy: 'Есть (ДФО)', status: 'По расписанию', statusClass: 'status-ok', tg: 'ТГК Магадан' },
    // Морские рейсы (заглушки без вызова API авиа)
    { from: 'VVO_SEA', to: 'KRS', fromName: 'Владивосток (Порт)', toName: 'Корсаков', type: 'ship', subsidy: '—', status: 'Ожидание сезона', statusClass: 'status-next', tg: 'TRT Логистика' },
    { from: 'PKC_SEA', to: 'SKR', fromName: 'Петропавловск-К.', toName: 'Северо-Курильск', type: 'ship', subsidy: '—', status: 'Ожидание сезона', statusClass: 'status-next', tg: 'TRT Логистика' }
];

// ==========================================================================
// ГЕНЕРАЦИЯ СТРОК ТАБЛИЦЫ И ЗАГРУЗКА ДАННЫХ
// ==========================================================================
function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = ''; // Очищаем

    dfoRoutes.forEach((route, index) => {
        const isShip = route.type === 'ship';
        const icon = isShip ? 'fa-ship ship-icon' : 'fa-plane plane-icon';
        const badgeClass = route.subsidy !== '—' ? 'badge-yes' : 'badge-no';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><i class="fa-solid ${icon}"></i></td>
            <td><strong>${route.fromName} (${route.from.replace('_SEA','')})</strong> → ${route.toName} (${route.to})</td>
            <td><span class="status ${route.statusClass}" id="status-${index}">${route.status}</span></td>
            <td><span class="badge ${badgeClass}">${route.subsidy}</span></td>
            <td class="price" id="price-${index}">${isShip ? '—' : 'Поиск...'}</td>
            <td><a href="#" class="tg-link"><i class="fa-brands fa-telegram"></i> ${route.tg}</a></td>
        `;
        tbody.appendChild(row);

        // Если это самолет, автоматически запрашиваем реальную цену с домена Aviasales
        if (!isShip) {
            fetchRealPrice(route.from, route.to, index);
        }
    });
}

// Запрос цен напрямую к партнерскому API
async function fetchRealPrice(origin, destination, rowIndex) {
    try {
        const url = `https://travelpayouts.com{origin}&destination=${destination}&period_type=month&sorting=price&show_to_affiliates=true&token=${API_TOKEN}`;
        const response = await fetch(url);
        const resData = await response.json();

        const priceCell = document.getElementById(`price-${rowIndex}`);
        const statusCell = document.getElementById(`status-${rowIndex}`);

        if (resData.success && resData.data && resData.data.length > 0) {
            // Берем самую низкую актуальную цену из кэша
            const actualPrice = resData.data[0].value;
            const formattedPrice = new Intl.NumberFormat('ru-RU').format(actualPrice) + ' ₽';
            priceCell.innerText = `от ${formattedPrice}`;
        } else {
            // Если в кэше партнеров сейчас нет поисков по этому маршруту
            priceCell.innerHTML = `<span style="color:#64748b; font-size:12px; font-weight:normal; cursor:pointer;">Проверить</span>`;
            priceCell.onclick = () => {
                window.open(`https://aviasales.ru{origin}&destination=${destination}&marker=${PARTNER_MARKER}`, '_blank');
            };
        }
    } catch (err) {
        console.error("Ошибка API на маршруте " + origin + "-" + destination, err);
        document.getElementById(`price-${rowIndex}`).innerText = 'Н/Д';
    }
}

// ==========================================================================
// ОЖИВЛЯЕМ КНОПКИ ДЕЙСТВИЯ (ФОРМА ПОИСКА И РЕГИОН)
// ==========================================================================

// Кнопка поиска билетов
document.getElementById('searchBtn').addEventListener('click', () => {
    const from = document.getElementById('searchFrom').value.trim().toUpperCase();
    const to = document.getElementById('searchTo').value.trim().toUpperCase();
    const date = document.getElementById('searchDate').value;

    if (!from || !to) {
        alert('Заполните поля "Откуда" и "Куда" трехбуквенными IATA кодами (например: YKS, KHV, VVO)');
        return;
    }

    let partnerUrl = `https://aviasales.ru{from}&destination=${to}&marker=${PARTNER_MARKER}`;
    if (date) {
        const parts = date.split('-'); // ГГГГ-ММ-ДД -> ДДММ
        if (parts.length === 3) partnerUrl += `&depart_date=${parts[2]}${parts[1]}`;
    }
    window.open(partnerUrl, '_blank');
});

// Кнопка выбора региона
document.getElementById('regionBtn').addEventListener('click', () => {
    const userCity = prompt('Введите ваш город (например: Мирный, Якутск, Магадан):');
    if (userCity) {
        document.getElementById('regionBtn').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${userCity}`;
    }
});

// Запуск инициализации при открытии страницы
document.addEventListener('DOMContentLoaded', renderTable);