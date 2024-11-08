import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import fs from 'fs';

// Sebelum setiap pengujian, muat HTML dari file
beforeEach(() => {
  const html = fs.readFileSync('./index.html', 'utf8');  // Membaca file HTML
  document.body.innerHTML = html; 
});

test('menampilkan judul utama', () => {
  expect(screen.getByText('Bem vindos tonis mansos!')).toBeInTheDocument();
});

test('menampilkan bagian "Sobre mim"', () => {
  // Target the h2 for "Sobre mim"
  expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
  expect(screen.getByText('Primeira vez a usar HTML and CSS portanto vai ficar lindo!.')).toBeInTheDocument();
});

test('menampilkan bagian hobi dengan item daftar', () => {
  expect(screen.getByText('Passatempos')).toBeInTheDocument();
  expect(screen.getByText('Cozinhar gandas cenas')).toBeInTheDocument();
  expect(screen.getByText('Correr')).toBeInTheDocument();
  expect(screen.getByText('Jogar pc 24/7')).toBeInTheDocument();
});

test('memeriksa keberadaan dan sumber gambar profil', () => {
  const img = screen.getByAltText('Profile Picture');
  expect(img).toHaveAttribute('src', 'images/profile.jpg');
  expect(img).toHaveAttribute('width', '200');
});

test('memverifikasi bagian kontak dan tautan', () => {
  // Target the h2 for "Contact Me"
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
  const link = screen.getByText('my Discord');
  expect(link).toHaveAttribute('href', 'https://discord.gg/9p2k43WF');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('memeriksa isi footer', () => {
  expect(screen.getByText(/© 2024 \[Jorge Conde\]. All rights reserved\./)).toBeInTheDocument();
});
