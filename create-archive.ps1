# PowerShell script to create project archive
Write-Host "Creating project archive..." -ForegroundColor Green

$projectPath = "C:\Users\Stepan\lab_2\lab_2_react"
$destination = "C:\Users\Stepan\Desktop\resume-project.zip"

# Files and folders to include
$include = @(
    "src",
    "public", 
    "dist",
    "package.json",
    "package-lock.json",
    "vite.config.js",
    "postcss.config.js",
    "tailwind.config.js",
    "index.html",
    "README.md",
    "fix-paths.bat"
)

# Create full paths
$fullPaths = $include | ForEach-Object { Join-Path $projectPath $_ }

# Compress the files
Compress-Archive -Path $fullPaths -DestinationPath $destination -Force

Write-Host "Archive created at: $destination" -ForegroundColor Green
Write-Host "Project saved successfully!" -ForegroundColor Cyan
