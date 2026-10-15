# 🦖 ARK Dino Color Generator

Nowoczesna aplikacja webowa do łatwego doboru kolorów dinozaurów i generowania gotowych komend do gier **ARK: Survival Evolved** oraz **ARK: Survival Ascended**.

Aplikacja jest przystosowana do darmowego hostowania na **GitHub Pages**.

---

## 🌟 Funkcje

- 🎨 **Pełna baza 227 kolorów ARK** wyciągnięta bezpośrednio z oficjalnej tabeli kolorów (ID, nazwa, podgląd odcienia HEX).
- 🦖 **Obsługa 6 regionów kolorystycznych (0–5)** z możliwością włączania/wyłączania poszczególnych regionów (dla dinozaurów, które nie posiadają wszystkich 6 slotów).
- 🎲 **Losowanie** całej palety na raz lub pojedynczych regionów.
- 📋 **Automatyczny generator komend**:
  - **Konsola Admina / Cheat**: `cheat settargetdinocolor 0 <id> | settargetdinocolor 1 <id> | ...`
  - **Komenda Czatu / Plugin**: `/color <r0> <r1> <r2> <r3> <r4> <r5>`
- 🔍 **Wyszukiwarka kolorów**: szybkie filtrowanie po nazwie, numerze ID lub kodzie HEX.
- 📱 **Responsywny, ciemny motyw**: działa świetnie na komputerach (obok gry) oraz na smartfonach.
- ⚡ **Zero konfiguracji i zależności (Vanilla JS)**: nie wymaga `npm`, `node` ani budowania — działa od razu w każdej przeglądarce.

---

## 🚀 Jak uruchomić na GitHub Pages?

1. Utwórz nowe repozytorium na swoim koncie **GitHub** (np. `ark-color-generator`).
2. Prześlij pliki z tego folderu do repozytorium:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ARK Color Generator"
   git branch -M main
   git remote add origin https://github.com/<twój-login>/<twoje-repo>.git
   git push -u origin main
   ```
3. W ustawieniach repozytorium na GitHubie:
   - Przejdź do zakładki **Settings** -> **Pages**.
   - W sekcji **Branch** wybierz gałąź `main` i katalog `/ (root)`.
   - Kliknij **Save**.
4. Po minucie Twoja aplikacja będzie dostępna pod adresem:
   `https://<twój-login>.github.io/<twoje-repo>/`
