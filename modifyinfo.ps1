$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date = Get-Date -Format "yyyyMMdd:HHmmss"

((Get-Content -path $file -Raw) -replace '{LatestCommit}','white' -replace '{DateCommit}' , $date ) | Set-Content -Path $file