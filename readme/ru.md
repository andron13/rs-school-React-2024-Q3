# React Forms

## Технические требования

1. Создайте отдельную ветку для этого задания. Имя ветки: "forms". Для выполнения задания вам нужно создать новое приложение.
2. Требования к языку:
   - Используйте **TypeScript** для проекта.
3. Настройка проекта:
   - Инициализируйте проект с использованием [Vite](https://vitejs.dev/guide/) с шаблоном [_react-ts_](https://vite.new/react-ts).
4. Инструменты для обеспечения качества кода:

   1. ESLint:
      - Настройте ESLint так, чтобы он выдавал ошибки при использовании типа _any_ в TypeScript.
   2. Prettier:
      - Интегрируйте Prettier для форматирования кода.
   3. Husky:
      - Добавьте Husky и настройте его для запуска линтинга перед коммитом.
   4. Команды в package.json:
      - Добавьте следующие npm-скрипты:
        - `lint`: для запуска команды линтинга.
        - `format:fix`: для запуска команды Prettier с опцией --write.

5. Добавьте **React Hook Form**, **Yup**, **Redux Toolkit** и **React Router** в приложение.

## Требования к приложению

1. Маршрутизация. Должно быть 3 маршрута:

   - Главный, который содержит ссылки на другие 2 маршрута.
   - Маршрут для формы, созданной с использованием неконтролируемых компонентов.
   - Маршрут для аналогичной формы, но созданной с использованием **React Hook Form**.

2. Redux. Используйте Redux для хранения данных, полученных с обоих форм, на главной странице. Вы можете использовать плитки для отображения данных, взятых из каждой формы.

3. Формы. Обе формы будут собирать одинаковые данные:

   - Имя (проверка на наличие заглавной первой буквы).
   - Возраст (должен быть числом, отрицательные значения не допускаются).
   - Email (проверка на корректность email).
   - Два пароля (должны совпадать, отображать сложность пароля: 1 цифра, 1 заглавная буква, 1 строчная буква, 1 специальный символ).
   - Пол (можно использовать радиокнопки или выпадающий список).
   - Согласие с условиями и положениями (может быть флажком).
   - Поле для загрузки изображения (проверка размера и расширения файла, разрешены png и jpeg, сохранить в Redux в формате base64).
   - Поле автозаполнения для выбора страны (все страны должны храниться в Redux).
     Форма должна содержать метки, которые должны быть связаны с полями ввода (см. **htmlFor**).

4. Валидация. Реализуйте валидацию в соответствии с описанием полей из п. 3. Используйте **Yup** для валидации. Показывайте ошибки либо над каждым компонентом, либо под ним (но придерживайтесь одного подхода во всем приложении). Заблокируйте отправку формы, пока все ошибки не будут устранены (должна быть отключена кнопка отправки). Хороший UX предполагает отсутствие "прыжков" при отображении ошибок.

   - Неконтролируемые компоненты должны реализовать валидацию при отправке.
   - Подход с **React Hook Form** должен реализовать живую валидацию.

5. После отправки формы. После успешной отправки формы перенаправьте пользователя на главный маршрут с всеми ранее введенными данными. Сделайте индикацию для недавно введенных данных на главной странице (например, покажите границу другим цветом на несколько секунд или другой цвет фона).

## Баллы

### Студент может получить 100 баллов:

- 3 маршрута (главный и 2 маршрута для форм), Redux настроен и используется для сбора данных с обеих форм, перенаправление на главный маршрут после отправки формы - **15 баллов**.
- Валидация работает для обеих форм в соответствии с требованиями (сообщения об ошибках, блокировка кнопки отправки), для валидации используется **Yup** (10 баллов, если работает только для одной формы) - **20 баллов**.
- Имя, возраст, email, выбор пола, согласие с условиями и положениями реализованы для обеих форм и собирают данные (если что-то не работает, баллы могут быть снижены) - **20 баллов**.
- Поле для загрузки изображения реализовано для обеих форм, изображение сохраняется в base64 и отображается на главной странице после перенаправления - **15 баллов**.
- Пароли (со сложностью пароля) реализованы для обеих форм - **15 баллов**.
- Автозаполнение работает для обеих форм - **15 баллов**.

  **Максимальные баллы должны быть присуждены, если требование выполнено для обеих форм, если что-то не работает, баллы должны быть снижены.**

### Штрафы

- Использование библиотек компонентов, например, Material UI, Ant Design: **-100 баллов**.
- TypeScript не используется: **-95 баллов**.
- Использование _any_: **-20 баллов за каждое использование**.
- Использование _ts-ignore_: **-20 баллов за каждое использование**.
- Наличие _code-smells_ (God-object, фрагменты дублированного кода), закомментированные секции кода: **-10 баллов за каждое**.
- Валидация реализована без использования **Yup**: **-25 баллов**.
- Коммиты после дедлайна: **-40 баллов**.
- Pull Request не соответствует требованиям (включая контрольный список в Score): **-10 баллов**.