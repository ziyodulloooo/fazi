@echo off
title AvtoTrade Pro Desktop App
echo ========================================================
echo        AVTOTRADE PRO - AVTO BOZOR DASTURI
echo ========================================================
echo Dastur ishga tushirilmoqda...
cd /d "%~dp0"
start "" http://localhost:4173
python -m http.server 4173
pause
