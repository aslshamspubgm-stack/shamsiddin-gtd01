@echo off
chcp 65001 >nul
 echo =====================================
 echo       SHAMS GTD - WINDOWS BUILD
 echo =====================================
 where node >nul 2>nul
 if errorlevel 1 (
   echo Node.js не найден. Установи Node.js 20+ с https://nodejs.org/
   pause
   exit /b 1
 )
 echo Устанавливаем зависимости...
 call npm install
 if errorlevel 1 (
   echo Ошибка установки зависимостей.
   pause
   exit /b 1
 )
 echo Собираем установщик Windows...
 call npm run dist:win
 if errorlevel 1 (
   echo Ошибка сборки.
   pause
   exit /b 1
 )
 echo Готово! Проверь папку release.
 pause
