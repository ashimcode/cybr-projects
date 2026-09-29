// Synthetic-only test for the draft PowerShell detection.

function isSuspiciousPowerShell(event) {
  if (event.event_code !== 1) return false;
  const image = String(event.image || '').toLowerCase();
  const commandLine = String(event.command_line || '').toLowerCase();
  return image.endsWith('\\powershell.exe')
    && [' -enc ', ' -encodedcommand ', ' -enc"', ' -encodedcommand"']
      .some((flag) => commandLine.includes(flag));
}

const positive = {
  event_code: 1,
  image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
  command_line: 'powershell.exe -NoProfile -EncodedCommand AAAA'
};

const negative = {
  event_code: 1,
  image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
  command_line: 'powershell.exe -NoProfile -File C:\\Scripts\\inventory.ps1'
};

if (!isSuspiciousPowerShell(positive)) throw new Error('positive fixture did not match');
if (isSuspiciousPowerShell(negative)) throw new Error('negative fixture matched unexpectedly');

console.log('synthetic detection fixture: passed');
