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

test('2. menu.html should include a menu-backdrop element for visual layering', () => {
  const menuHtmlContent = fs.readFileSync(path.join(projectRoot, '_includes/menu.html'), 'utf8');
  assert.match(menuHtmlContent, /id="menuBackdrop"/, 'menu.html should contain #menuBackdrop element');
  assert.match(menuHtmlContent, /class="menu-backdrop"/, 'menu.html should contain .menu-backdrop class');
});

test('3. styles.css should define menu-backdrop and enhanced menu-overlay styles', () => {
  const cssContent = fs.readFileSync(path.join(projectRoot, 'assets/css/styles.css'), 'utf8');
  
  // Backdrop styling assertions
  assert.match(cssContent, /\.menu-backdrop\s*\{/, 'styles.css should define .menu-backdrop rules');
  assert.match(cssContent, /backdrop-filter:\s*blur/, 'styles.css should use backdrop-filter blur for backdrop overlay');
  assert.match(cssContent, /\.menu-backdrop\.is-active/, 'styles.css should define active state for .menu-backdrop');

  // Overlay layering & viewport assertions
  assert.match(cssContent, /100dvh/, 'styles.css .menu-overlay should use 100dvh for viewport coverage');
  assert.match(cssContent, /box-shadow:/, 'styles.css .menu-overlay should have drop shadow for visual separation');
});

test('4. main.js should manage menuBackdrop toggle state and click listener', () => {
  const jsContent = fs.readFileSync(path.join(projectRoot, 'assets/js/main.js'), 'utf8');
  
  assert.match(jsContent, /menuBackdrop/, 'main.js should reference menuBackdrop element');
  assert.match(jsContent, /menuBackdrop\.classList\.add\('is-active'\)/, 'main.js openMenu should activate menuBackdrop');
  assert.match(jsContent, /menuBackdrop\.classList\.remove\('is-active'\)/, 'main.js closeMenu should deactivate menuBackdrop');
});
