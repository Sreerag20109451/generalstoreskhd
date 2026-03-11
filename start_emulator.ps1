$EmulatorPath = "$env:LOCALAPPDATA\Android\Sdk\emulator\emulator.exe"
$EmulatorName = "Pixel_8_Pro"

if (Test-Path $EmulatorPath) {
    Write-Host "Starting emulator $EmulatorName..."
    Start-Process -FilePath $EmulatorPath -ArgumentList "-avd $EmulatorName" -NoNewWindow
    Write-Host "Emulator launch command sent."
} else {
    Write-Host "ERROR: Emulator not found at $EmulatorPath" -ForegroundColor Red
    Write-Host "Please ensure Android Studio is installed and the SDK path is correct."
}
