@echo off
cd /d "%~dp0"
if not exist dist\img\hero*.jpg powershell -NoProfile -ExecutionPolicy Bypass -File get-images.ps1
echo Serving the production build on http://localhost:5174
start http://localhost:5174
npx --yes serve -l 5174 dist
pause
