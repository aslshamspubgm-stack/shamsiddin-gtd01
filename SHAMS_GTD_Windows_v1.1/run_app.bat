@echo off
chcp 65001 >nul
where node >nul 2>nul
if errorlevel 1 (
  echo Установи Node.js 20+ с https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (call npm install)
call npm start
