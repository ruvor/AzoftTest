# AzoftTest
Репозиторий содержит выполненное тестовое задание от компании Azoft. Собственно задание имеется в [файле](https://github.com/adhub/AzoftTest/blob/master/Dot.Net-Developer-TrialTask.docx?raw=true) в этом репозитории.

## Краткая информация о веб-приложении

[Веб-приложение](http://azoftcur.azurewebsites.net/) выполнено на фреймворке ASP.NET MVC. Основной интерфейс главной страницы обслуживается
супергероическим MVW-фреймворком [AngularJS](https://angularjs.org/). Элементы управления на странице увязаны с его помощью в систему с моделью данных.
Информация для вывода на странице (и предложения при поиске валют, и закрепленные валюты пользователя, и курсы) запрашивается
у сервера, который отдает ее при помощи "сестринского" фреймворка ASP.NET MVC — Web API. Контроллер этого API выдает информацию в формате JSON.
Хранится информация в базе данных под управлением MS SQL Server. Для доступа к ней используется ORM производства Microsoft под названием
Entity Framework.

Внешний вид страниц определется использованным CSS-фреймворком [Bootstrap](http://getbootstrap.com/). Для разнообразия на сайте
установлена темная тема [Superhero](http://bootswatch.com/superhero/).

Выбор интервала дат производится при помощи контрола [Datepicker](http://angular-ui.github.io/bootstrap/#/datepicker) из комплекта [UI Bootstrap](http://angular-ui.github.io/bootstrap/). К сожалению, он не позволяет организовать выбор интервала в одном календарном гриде,
поэтому применены два пикера.

График изменения курса рисуется библиотекой [n3-line-chart](http://n3-charts.github.io/line-chart/), которая для своей работы требует также [D3.js](http://d3js.org/). n3-line-chart реализован в виде директивы для AngularJS, поэтому график "бесшовно" интегрировался в модель данных страницы.

База данных и код проекта были развернуты с применением облачной инфраструктуры Microsoft — [Azure](https://azure.microsoft.com/). БД размещена в облачном SQL Server, а код — в службе веб-приложений Azure.

## Замечания по предварительной обработке

Оказалось, что коды валют, которые ЦБ [предлагает](http://cbr.ru/scripts/Root.asp?PrtId=SXML) использовать при запросах финансовой информации
в своих веб-сервисах, не имеют ничего общего с мировым стандартом — ISO 4217. Одним из запросов, указанных на странице, был получен список
кодов валют в формате XML. Также был скачан перечень кодов валют по стандарту ISO 4217 в формате CSV. При помощи временного серверного скрипта
был сформирован CSV-файл, в который была сведена информация по валютам: код ЦБ, код ISO 4217, название на английском языке, название на
русском языке. Затем данные из этого файла были импортированы в таблицу БД.
