cd src\WebDashboardNG\book-dash
call npm i
call ng build --prod=true 
del ..\..\BookRental\BookRentalAPI\wwwroot\index.html
(robocopy dist\book-dash ..\..\BookRental\BookRentalAPI\wwwroot  /MIR /XD) ^& IF %ERRORLEVEL% LSS 8 SET ERRORLEVEL = 0