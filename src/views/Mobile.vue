<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Application Mobile</h1>
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Fonctionnalités</h2>
          <ul class="list-disc list-inside text-primary-100 space-y-2">
            <li><strong>(FP1) Connexion avec drones et radiocommandes :</strong> Enregistrement et connexion vers les drones et radiocommandes.</li>
            <li><strong>(FP2) Monitoring en temps réel :</strong> Affichage des données en direct telles que la vitesse, l'altitude, la batterie, la position GPS.</li>
            <li><strong>(FP3) Configuration des paramètres de vol :</strong> Réglage des vitesses de vol, altitude maximale, zones de non-survol, mode de vol.</li>
            <li><strong>(FP4) Calibrage de la radiocommande et des capteurs du drone :</strong> Assistance pas à pas pour calibrer la boussole, le gyroscope, les joysticks et autres composants le nécessitant.</li>
            <li><strong>(FP5) Mise à jour :</strong> Mise à jour des firmware et logiciels embarqués dans les équipements connectés à l’application.</li>
            <li><strong>(FP6) Planification de vol automatique :</strong> Enregistrement de trajectoire de vol du drone et pilotage de ce dernier de façon automatisé avec des trajectoires pré-enregistrées ou enregistrées par l’utilisateur.</li>
          </ul>
        </div>
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Captures d'écran</h2>
          <div class="grid grid-cols-2 gap-4">
            <img
              v-for="(capture, idx) in captures"
              :key="idx"
              :src="capture.url"
              :alt="capture.alt"
              class="bg-primary-400 aspect-[9/16] rounded-lg object-cover"
            />
          </div>
        </div>
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Fonctionnalités secondaires</h2>
          <ul class="list-disc list-inside text-primary-100 space-y-2">
            <li><strong>(FS1) Enregistrement des données de vol :</strong> Historique des vols, sauvegarde des trajectoires et données télémétriques.</li>
            <li><strong>(FS2) Notifications et alertes :</strong> Alertes en cas de perte de signal, faible niveau de batterie ou d'obstacle détecté.</li>
            <li><strong>(FS3) Connexion utilisateur :</strong> L'utilisateur peut créer un compte pour sauvegarder ses données, notamment ses historiques de vols, ses configurations de drones et de radiocommandes, ainsi que ses planifications de vols automatiques.</li>
            <li><strong>(FS4) Fonctionnalités du drone :</strong> Utilisation des fonctionnalités avancées du drone (selon les modules installés, par exemple : caméra).</li>
          </ul>
        </div>
        <div class="mt-4 max-w-xs mx-auto bg-primary-500/50 rounded-lg p-8">
          <h3 class="text-xl font-semibold text-primary-200 mb-4">Vidéo de démonstration</h3>
          <video controls preload="metadata" class="aspect-[9/16] rounded-lg object-contain w-full max-h-96">
            <source :src="videos[0].url" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <p class="text-primary-100 mt-2 text-center">{{ videos[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CDN_URL } from "../config.ts";

const captures = [
  {
    url: CDN_URL + "images/drone/mobile-1.jpg",
    alt: "Capture d'écran 1"
  },
  {
    url: CDN_URL + "images/drone/mobile-2.jpg",
    alt: "Capture d'écran 2"
  }
];

const videos = [
  {
    url: CDN_URL + "videos/demo-mobile.mp4",
    description: "Vidéo de démonstration de l'application mobile."
  }
];
</script>