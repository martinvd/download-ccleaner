import test from 'ava';
import execa from 'execa';
import del from 'del';
import pathExists from 'path-exists';

const defaultFolder = 'ccleaner';
const customFolder = 'put-here';

function exists(folder) {
  return pathExists(`./${folder}/CCleaner.exe`);
}

test('Default folder', async t => {
  await execa('node', ['cli.js']);
  t.true(await exists(defaultFolder));
});

test('Custom folder', async t => {
  await execa('node', ['cli.js', customFolder]);
  t.true(await exists(customFolder));
});

test.after.always('cleanup', () => Promise.all([
  del(defaultFolder),
  del(customFolder)
]));
