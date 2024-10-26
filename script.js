/*
 * File: script.js
 * Description: JavaScript untuk fitur pencarian/filter artikel di website AL-News.
 * Author: Alya Rahmatillah Machmud
 * Date: 16 Oktober 2024
 * Version: 1.0
 * 
 * This script adds a search functionality to filter articles based on user input.
 */

// Fungsi untuk filter artikel
function filterArticles() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase();
  var nodes = document.getElementById('articleContainer').getElementsByClassName('col');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].textContent.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}



// Fungsi untuk membuat hujan

  function createRain() {
    const rainContainer = document.querySelector('.rain');
    const numDrops = 100; // Jumlah tetesan air

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      drop.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
      drop.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durasi jatuh acak
      drop.style.animationDelay = `${Math.random() * 5}s`; // Delay acak sebelum jatuh
      rainContainer.appendChild(drop);
    }
  }

  // Panggil fungsi untuk membuat hujan saat halaman dimuat
  window.onload = createRain;


