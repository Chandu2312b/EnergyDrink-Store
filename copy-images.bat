@echo off
echo Copying images to public/images folder...
echo.
echo Please place your image files in the same directory as this script:
echo - chocolate.jpg
echo - vanilla.jpg  
echo - orange.jpg
echo.
echo Then run this script to copy them to the correct location.
echo.

if exist "chocolate.jpg" (
    copy "chocolate.jpg" "public\images\chocolate.jpg"
    echo ✓ Copied chocolate.jpg
) else (
    echo ✗ chocolate.jpg not found
)

if exist "vanilla.jpg" (
    copy "vanilla.jpg" "public\images\vanilla.jpg"
    echo ✓ Copied vanilla.jpg
) else (
    echo ✗ vanilla.jpg not found
)

if exist "orange.jpg" (
    copy "orange.jpg" "public\images\orange.jpg"
    echo ✓ Copied orange.jpg
) else (
    echo ✗ orange.jpg not found
)

echo.
echo Done! Your images should now be available in the application.
pause 