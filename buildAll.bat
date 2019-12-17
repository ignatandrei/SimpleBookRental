cd src\WebDashboard\book-dashboard
call npm i
call npm run build
del ..\..\BookRental\BookRentalAPI\wwwroot\index.html
(robocopy build ..\..\BookRental\BookRentalAPI\wwwroot  /MIR /XD) ^& IF %ERRORLEVEL% LSS 8 SET ERRORLEVEL = 0