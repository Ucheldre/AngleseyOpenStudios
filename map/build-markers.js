#!/usr/bin/env node
/**
 * Converts map/markers.jsonc → map/markers.json
 * Run this whenever markers.jsonc is updated:
 *   node map/build-markers.js
 *
 * Why: GitHub Pages (Jekyll) does not reliably serve .jsonc files,
 * so the map fetches markers.json instead.
 */
const fs = require('fs');
const path = require('path');

const src  = path.join(__dirname, 'markers.jsonc');
const dest = path.join(__dirname, 'markers.json');

const text = fs.readFileSync(src, 'utf8');

// Strip single-line and multi-line comments
const clean = text
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim();

// Validate by parsing, then write pretty-printed JSON
const parsed = JSON.parse(clean);
fs.writeFileSync(dest, JSON.stringify(parsed, null, 2) + '\n');

console.log(`✓  markers.json updated (${parsed.length} markers)`);
