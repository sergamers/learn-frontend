# (##.01.2023)

## План урока

1. Сверстать `catalog-card`
2. Сгенерировать сетку
3. Разобрать `news-card`
    * Показать готовый вариант в астре

## Доп материалы

1. CSS игры и  инструменты
   * [Flexbox Froggy](https://flexboxfroggy.com/#ru)
   * [Grid Garden](https://cssgridgarden.com/#ru)
   * [CSS Grid Layout Generator](https://angrytools.com/css-grid/)
   * [koala](http://koala-app.com/)
   * [Плагин eCSStractor](https://www.youtube.com/watch?v=pZiYs_Sput8)
2. SCSS
   * [Основы Sass](https://sass-scss.ru/guide/)
   * [Scss online](https://www.sassmeister.com/)

## Домашнее задание

1. Работа в Trello:
   * Создать задачу: Сверстать `news-card` и `catalog-card`
   * Дать оценку за сколько будет выполнена задача. Сделать сравнение план/факт.
   * прикрепить pull request в задачу.
   * Назначить Сергея проверяющим (в карточке Trello и в pull request)
* Написать инструкцию что делать если в ветку попали несанкционированны изменения в формате md

# (28.12.2022) - Создание компонента doc-step-card

## План урока

1. Работа с таймером ( Тайм менеджмент )
2. Рассказать про изменение архитектуры приложения
3. Слить изменения в `master` и создать ветку урока `lesson-3`
4. Сверстать `doc-step-card` используя Perfect Pixel 
    * Подключить компонент кнопок
    * Показать принцип работы с плагином
5. Разобрать домашнее задание


## Доп материалы

1. Perfect Pixel
   * [Pixel Perfect - что это? Как верстать четко в макет?](https://www.youtube.com/watch?v=3goWqJcV4u8)
   * [Ссылка на расширение](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)
2. [Официальная страница сайта](https://sanis.ru/)
3. Code review
   * [Про code review](https://www.youtube.com/watch?v=nrNSc_i9SiE)
   * [Code Review - Процессы](https://www.youtube.com/watch?v=MkCZocjg9to)
   * [Что такое Pull Request](https://www.youtube.com/watch?v=Svx5wiDqWyE)
   * [разрешение конфликтов в git merge](https://www.youtube.com/watch?v=PXK1hIifpWU)
     * [Git: курс](https://www.youtube.com/playlist?list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb)
   * https://www.atlassian.com/ru/git/tutorials/using-branches/merge-conflicts
   * [Устранение конфликта слияния в коде Visual Studio](https://www.youtube.com/watch?v=lz5OuKzvadQ)
4. Расширения
   * [Timer](https://chrome.google.com/webstore/detail/timer/hepmlgghomccjinhcnkkikjpgkjibglj)
   * [Toggl Track: Productivity & Time Tracker](https://chrome.google.com/webstore/detail/toggl-track-productivity/oejgccbfbmkkpaidnkphaiaecficdnfn)
   * [PixelParallel by htmlBurger](https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob)
   * [Google Переводчик](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)



## Домашнее задание

1. Сверстать `new-item-card` и `doc-step-card`
2. Создать pull request 
3. Найти 5 сообществ где можно пообщаться на ИТ темы и задавать вопросы для новичков. Поделиться найденным в телеграмме.
4. Подписаться на 5 youtube каналов ИТ тематики. Поделиться найденным в телеграмме. 
5. Самостоятельно изучить и поделиться найденным в телеграмме на темы:
   * Markdown 
   * Scrum
   * Kanban
   * Trello
   * gitflow
   * workflow
   * Тайм менеджмент
6. Создать первую рабочую область в trello
7. Пригласить в рабочую область друг друга


# (13.12.2022) - Создание компонента icon

1. Создание компонента icon
   * Делаем акцент на overflow и переменной для квадрата
2. Показываем как можно влиять на векторную графику с помощью css 

## Доп материалы

1. http://htmlbook.ru/index.php/css/overflow
2. http://htmlbook.ru/css/selector/child
3. http://htmlbook.ru/css/selector/universal
4. [что такое .gitkeep](https://translated.turbopages.org/proxy_u/en-ru.ru.b353b128-639c6f1c-111eac19-74722d776562/https/www.freecodecamp.org/news/what-is-gitkeep/)
5. [Видео на английском про .gitkeep](https://www.youtube.com/watch?v=PdJqFpxA9zA)
6. SVG to Inline
   * [npm](https://www.npmjs.com/package/svg-to-inline?activeTab=readme)
   * [git](https://github.com/tiagoporto/svg-to-inline)
```
<script src="/node_modules/svg-to-inline/dist/svg-to-inline.js"></script> 
 
<svg-to-inline
  path="images/logos/logo.svg"
  lazy="true"
  class-Name="my-class other-class"
  loading-Label="Loading"
></svg-to-inline>

```

* `path` - String. Обязательный атрибут. Получает путь до svg картинки.
* `lazy` - Boolean. Не обязательный атрибут. Если передает true, то подгружает svg только когда она будет рядом с областью просмотра.
* `class-Name` - String. Не обязательный атрибут. Передает тегу svg класс
* `loading-Label` - String. Не обязательный атрибут. По умолчанию `Loading...`. Для загрузки svg требуется время. Пока идет загрузка отображается этот текст. (аналог alt в теге img)

## Домашнее задание

1. Сделать компонент icon самостоятельно.
2. Добавить пару png и svg иконок
3. Сделать отдельный компонент стрелки вправо/влево, белый/черный

### Самостоятельно выполнить следующие компоненты

1. circle-button 
2. label 
3. partner-card 

# (04.12.2022) - Доделываем компонент button

1. Создали  компонент button
2. Познакомились с css переменными
3. Подключили normalize.css через npm
4. Дополнить gitignore
5. [Относительные пути](https://prnt.sc/l2j4qs5T38Sa)

## Доп. Материалы

* Растровая и векторная графика
  * [Статья](https://htmlacademy.ru/blog/html/rastr-vector)
  * [Видео](https://www.youtube.com/watch?v=bIRwyRDT-PY)
  * Иконки
    * https://getbootstrap.ru/docs/icons/
    * https://heroicons.com/
    * https://www.svgrepo.com/
* npm
  * https://www.youtube.com/watch?v=FdZoopHL2K4
  * https://www.youtube.com/watch?v=FDfvuNbSs4U

# (21.11.2022) - Верстка компонента button

1. Создать ветку урока - lesson-1
2. Рассмотреть св-во display ( inline, block, inline-block )
3. Посмотреть как работают отступы
4. Посмотреть компонент [button](https://getbootstrap.ru/docs/5.1/components/buttons/)

## Доп. Материалы

* [Разбираемся, что такое и зачем нужен файл normalize.css](https://yandex.ru/q/article/razbiraemsia_chto_takoe_i_zachem_nuzhen_706b78a2/?utm_source=yandex&utm_medium=feature_click)
* [Единицы измерения: px, em, rem и другие](https://learn.javascript.ru/css-units)
* Flexbox
  * [Визуальное руководство по свойствам Flexbox из CSS3](https://css-live.ru/articles/vizualnoe-rukovodstvo-po-svojstvam-flexbox-iz-css3.html)
  * [Шпаргалка по Flexbox CSS](https://tpverstak.ru/flex-cheatsheet/)
  * [Игра](https://flexboxfroggy.com/#ru)
* [Специальные символы HTML](https://htmlweb.ru/html/symbols.php)
* Схлопывание margin
  * [Схлопывающиеся margin](https://webref.ru/course/block-model/margin-collapse)
  * [Видео](https://www.youtube.com/watch?v=IgJy2bmjK6s)
* [Команда Git stash. Как прятать изменения в Git](https://pingvinus.ru/git/1718)

# Цель - Сверстать выделенные блоки в макете под UI KIT

## Минимальные требования урока

* html - базовые навыки
* css - базовые навыки
* БЭМ - базовые навыки
* figma - базовые навыки
* все пройденное до этого

## Доп. Материалы

* [Что такое UI KIT](https://vc.ru/design/491359-kak-ne-razvodit-bardak-v-dizayne-sobiraem-ui-kit)
* [Lightshot](https://app.prntscr.com/ru/index.html)
* [Зачем нужны переменные в CSS](https://thecode.media/css-var/)
* [Шпаргалка по Emmet](https://docs.emmet.io/cheat-sheet/)
* [18 популярных UI-фреймворков, с помощью которых можно сделать удобный и отзывчивый сайт](https://te-st.ru/2017/08/01/ui-framework/)

## Компоненты

1. ~~[icon](https://prnt.sc/0zIRXXfnDVlP)~~
2. ~~[button](https://prnt.sc/uuI5-_P8T6NF)~~
3. ~~[circle-button](https://prnt.sc/5p2FZMX8f40x)~~
4. ~~[label](https://prnt.sc/wlgqvGYhBloe)~~
5. ~~[partner-card](https://prnt.sc/Do6kAjII8jar)~~
6. ~~[doc-step-card](https://prnt.sc/PIV_RpEFQR-L)~~
7. ~~[new-item-card](https://prnt.sc/wlgqvGYhBloe)~~ 
8. [catalog-card](https://prnt.sc/9kWKo_eWyPn9)
9. [news-card](https://prnt.sc/0HYlxgre2eiz)

# (15.11.2022) Цель - Настроить репозиторий. Ознакомиться с материалами для следующего урока 

## Минимальные требования урока

* git - базовые навыки

## Доп. Материалы

* [Макет](https://www.figma.com/file/ZF1Awe9cnhJkJXVodVDzDn/Sanis-desctop-verstka-temp-(Copy)?node-id=1%3A5702&t=EfpiR2NRFc03WC2F-0)
* [Сервисы для создания UI/UX прототипов](https://timeweb.com/ru/community/articles/luchshie-analogi-figma-samye-krutye-servisy-dlya-ux-ui-dizaynerov)
* БЭМ
  * [видео](https://www.youtube.com/watch?v=fnfQcs0Y0g8&t=178s)
  * [почитать](https://ru.bem.info/methodology/quick-start/)
* [Компонентный подход в программировании: что это и где его используют?](https://codernet.ru/articles/drugoe/komponentnyij_podxod_v_programmirovanii_chto_eto_i_gde_ego_ispolzuyut/)
* Git
  * [LearnGitBranching](https://learngitbranching.js.org/?locale=ru_RU)
  * [Что такое .gitignore](https://www.atlassian.com/ru/git/tutorials/saving-changes/gitignore)
  * [Офф. сайт](https://git-scm.com/)
  * [GitHub Desktop - GUI](https://desktop.github.com/)
  * [Как сгенерировать SSH-ключ для доступа на сервер](https://selectel.ru/blog/tutorials/how-to-generate-ssh/)
  * [GitHub - Крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.](https://github.com/)
  * [Шпаргалка по git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)
  * [Рабочий репозиторий](https://github.com/sergamers/learn-frontend)
