$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date = Get-Date -Format "yyyyMMdd:HHmmss"
Get-ChildItem Env:
$commitText = $Env:BUILD_SOURCEVERSIONMESSAGE
$paramsGit = "Log --format='%s' -1"
$author= & "git.exe" $paramsGit
((Get-Content -path $file -Raw) -replace '{LatestCommit}',$commitText -replace '{LastAuthor}',$author -replace '{DateCommit}' , $date ) | Set-Content -Path $file
(Get-Content -path $file -Raw)
