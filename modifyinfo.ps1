$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date = Get-Date -Format "yyyyMMdd:HHmmss"
#$commitText= $Env:BUILD_SOURCEVERSIONMESSAGE
$commitText = (Get-Item Env:\BUILD_SOURCEVERSIONMESSAGE)
((Get-Content -path $file -Raw) -replace '{LatestCommit}',$commitText -replace '{DateCommit}' , $date ) | Set-Content -Path $file
(Get-Content -path $file -Raw)