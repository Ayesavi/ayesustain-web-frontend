@echo off

echo Running npm run format...
call npm run format > nul 2>&1
if %errorlevel% equ 0 (
  echo Formatting Completed Successfully. 
) else (
  echo Npm run format failed.
)
echo Running npm run build...
call npm run build > nul 2>&1
if %errorlevel% equ 0 (
  echo Build Completed Successfully
) else (
  echo Build Failed. 
)
echo.
exit /b 0