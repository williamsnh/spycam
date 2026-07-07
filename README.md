# Spycam (Mobile Robot Project)

Projet de robot mobile à roues équipé d'une caméra embarquée, piloté et supervisé à distance via une interface web.

## Objectif du projet

Développer un petit robot téléguidé capable de :

* Diffuser un flux vidéo temps réel depuis sa caméra embarquée
* Être piloté à distance via une interface web (déplacement + orientation de la caméra)
* Fonctionner en réseau local, avec une latence la plus faible possible

Le tout d'abord développé côté logiciel (interface web + simulateur) puis porté sur le hardware réel (ESP32 + caméra + châssis 4 roues).

## État actuel du projet

Développement actuel concentré sur la partie logicielle (interface web + protocole de communication) en attendant l'accès au matériel. Le firmware embarqué et l'intégration hardware seront développés dans un second temps.

## Stack technique

* ESP32 (ESP-IDF) ; firmware embarqué, à venir
* C/C++ ; firmware
* React ; interface web de supervision/commande
* WebSocket ; communication temps réel (commandes de déplacement)
* HTTP/MJPEG ; streaming vidéo
* Serveur de simulation (Node.js/Python) ; pour développer et tester l'interface sans hardware
* Docker ; environnement de dev
* (plus tard : contrôle pan/tilt caméra, détection de mouvement, TinyML)

## Installation du projet

```
mkdir spycam
cd spycam
npm create vite@latest . -- --template react
npm install
npm run dev
```