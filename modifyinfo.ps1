$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date = Get-Date -Format "yyyyMMdd:HHmmss"
Get-ChildItem Env:

$author= (git.exe Log --format='%s' -1) | Out-String
$commitText = $Env:BUILD_SOURCEVERSIONAUTHOR
((Get-Content -path $file -Raw) -replace '{LatestCommit}',$commitText -replace '{LastAuthor}',$author -replace '{DateCommit}' , $date ) | Set-Content -Path $file
(Get-Content -path $file -Raw)
