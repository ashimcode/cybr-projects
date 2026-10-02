// Synthetic-only test for the draft PowerShell detection.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

function isSuspiciousPowerShell(event) {
  if (event.event_code !== 1) return false;
  const image = String(event.image || '').toLowerCase();
  const commandLine = String(event.command_line || '').toLowerCase();
  return image.endsWith('\\powershell.exe')
    && [' -enc ', ' -encodedcommand ', ' -enc"', ' -encodedcommand"']
      .some((flag) => commandLine.includes(flag));
}

const fixturePath = fileURLToPath(new URL('./fixtures/suspicious-powershell-events.json', import.meta.url));
const fixtures = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

for (const fixture of fixtures) {
  const actual = isSuspiciousPowerShell(fixture.event);
  if (actual !== fixture.expected_match) {
    throw new Error(`${fixture.name} expected ${fixture.expected_match} but received ${actual}`);
  }
}

console.log(`synthetic detection fixture: passed (${fixtures.length} cases)`);
