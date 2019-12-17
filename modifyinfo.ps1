$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date = Get-Date -Format "yyyyMMdd:HHmmss"
$commitText= & "git.exe" "reflog  -1  --pretty=oneline"
$author=Get-Variable BUILD_SOURCEVERSIONAUTHOR -valueOnly 
Get-ChildItem Env:
#$commitText = (Get-Item Env:\BUILD_SOURCEVERSIONMESSAGE)
((Get-Content -path $file -Raw) -replace '{LatestCommit}',$commitText -replace '{LastAuthor}',$author -replace '{DateCommit}' , $date ) | Set-Content -Path $file
(Get-Content -path $file -Raw)