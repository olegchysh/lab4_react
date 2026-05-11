@echo off
echo Creating project archive...
set "destination=C:\Users\Stepan\lab_2\lab_2_react\resume-project.zip"

REM Create zip using tar (Windows 10+)
tar -czf "%destination%" src/ public/ dist/ package.json package-lock.json vite.config.js postcss.config.js index.html README.md fix-paths.bat create-archive.bat create-archive.ps1

if exist "%destination%" (
    echo Archive created successfully at: %destination%
    echo Size:
    dir "%destination%" | findstr "%destination%"
) else (
    echo Failed to create archive.
)
pause
