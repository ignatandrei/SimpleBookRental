$file = ".\src\BookRental\BookRentalAPI\Controllers\InfoController.cs"
$date= Get-Date 
$dateString = $date.ToUniversalTime().ToString("yyyyMMdd:HHmmss")
Get-ChildItem Env:

$author= $Env:BUILD_SOURCEVERSIONAUTHOR

$commitText = $env:BASH_COMMITMESSAGE
((Get-Content -path $file -Raw) -replace '{LatestCommit}',$commitText -replace '{LastAuthor}',$author -replace '{DateCommit}' , $dateString ) | Set-Content -Path $file
(Get-Content -path $file -Raw)
