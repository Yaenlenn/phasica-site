import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('1. locales.yml should contain compact labels for traditional Chinese', () => {
  const localesContent = fs.readFileSync(path.join(projectRoot, '_data/locales.yml'), 'utf8');
  
  // Check for zh-tw label without spaces around middle dot
  assert.match(localesContent, /label:\s*繁中·台/, 'zh-tw label should be 繁中·台 without spaces');
  assert.doesNotMatch(localesContent, /label:\s*繁中\s+·\s+台/, 'zh-tw label should not have spaces around dot');

  // Check for zh-hk label without spaces around middle dot
  assert.match(localesContent, /label:\s*繁中·港/, 'zh-hk label should be 繁中·港 without spaces');
  assert.doesNotMatch(localesContent, /label:\s*繁中\s+·\s+港/, 'zh-hk label should not have spaces around dot');
});

test('2. menu.html and styles.css should define menu overlay container', () => {
  const menuHtmlContent = fs.readFileSync(path.join(projectRoot, '_includes/menu.html'), 'utf8');
  const cssContent = fs.readFileSync(path.join(projectRoot, 'assets/css/styles.css'), 'utf8');
  
  assert.match(menuHtmlContent, /id="menuOverlay"/, 'menu.html should contain #menuOverlay element');
  assert.match(cssContent, /\.menu-overlay\s*\{/, 'styles.css should define .menu-overlay rules');
  assert.match(cssContent, /100dvh/, 'styles.css .menu-overlay should use 100dvh for viewport coverage');
});

test('3. main.js should manage menuOverlay toggle state', () => {
  const jsContent = fs.readFileSync(path.join(projectRoot, 'assets/js/main.js'), 'utf8');
  
  assert.match(jsContent, /menuOverlay\.classList\.add\('is-active'\)/, 'main.js openMenu should activate menuOverlay');
  assert.match(jsContent, /menuOverlay\.classList\.remove\('is-active'\)/, 'main.js closeMenu should deactivate menuOverlay');
});
