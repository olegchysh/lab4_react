@echo off
echo Creating project archive...
set "destination=C:\Users\Stepan\lab_2\lab_2_react\resume-project.zip"

REM Using PowerShell to create zip
powershell -Command "& {Compress-Archive -Path 'src','public','dist','package.json','package-lock.json','vite.config.js','postcss.config.js','index.html','README.md','fix-paths.bat','create-archive.bat','create-archive.ps1' -DestinationPath '%destination%' -Force}"

if exist "%destination%" (
    echo Archive created successfully at: %destination%
) else (
    echo Failed to create archive.
)
pause
