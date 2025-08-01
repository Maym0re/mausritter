import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-amber-900 mb-4">
            🐭 Mausritter
          </h1>
          <p className="text-xl text-amber-700 mb-2">
            Campaign Helper
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Добро пожаловать в помощник для игры Mausritter! Создавайте и исследуйте
            карты кампании в мире отважных мышей-авантюристов.
          </p>
        </div>

        {/* Карточки режимов */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Карточка мастера */}
          <Link href="/master">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-red-200 hover:border-red-400 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">🎲</div>
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Game Master
                </h2>
                <p className="text-gray-600 mb-6">
                  Создавайте и управляйте картой кампании. Редактируйте гексы,
                  добавляйте поселения и ориентиры, управляйте туманом войны.
                </p>
                <div className="bg-red-100 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Возможности:</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Полное редактирование карты</li>
                    <li>• Генерация случайного контента</li>
                    <li>• Управление видимостью для игроков</li>
                    <li>• Расширение карты новыми гексами</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>

          {/* Карточка игрока */}
          <Link href="/player">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-blue-200 hover:border-blue-400 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">⚔️</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Player View
                </h2>
                <p className="text-gray-600 mb-6">
                  Исследуйте мир глазами отважного мыша-авантюриста.
                  Открывайте новые территории по мере их исследования.
                </p>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Особенности:</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Туман войны скрывает неизвестные области</li>
                    <li>• Подробная информация об открытых локациях</li>
                    <li>• Красивые иконки поселений и ориентиров</li>
                    <li>• Интерактивное исследование</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Информация о Mausritter */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              О Mausritter
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mausritter — это ролевая игра о храбрых мышах в опасном мире.
              Игроки берут на себя роли маленьких, отважных и отчаянных авантюристов,
              исследующих опасные места и путешествующих по миру, который описывает мастер игры.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-amber-700">
              <div className="flex items-center gap-2">
                <span>🏰</span>
                <span>Исследование подземелий</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🗺️</span>
                <span>Путешествия по гексам</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎭</span>
                <span>Ролевая игра</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
