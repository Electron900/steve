import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../utils/icons';

/**
 * CAROUSEL — Images depuis src/assets/carousel/
 * ─────────────────────────────────────────────
 * Pour ajouter vos photos :
 *   1. Créez le dossier  src/assets/carousel/
 *   2. Déposez-y vos images (jpg, jpeg, png, webp)
 *   3. Nommez-les avec un préfixe numérique pour contrôler l'ordre :
 *        01-pretoria.jpg
 *        02-conference.jpg
 *        03-cerdi.jpg  …etc.
 *   4. (Optionnel) Créez src/assets/carousel/captions.json pour les légendes :
 *        { "01-pretoria.jpg": { "caption": "University of Pretoria", "description": "Postdoctoral Research" } }
 *
 * Vite charge automatiquement tous les fichiers du dossier via import.meta.glob.
 */

// ── Import dynamique de toutes les images du dossier carousel ────────────────
const imageModules = import.meta.glob(
  '../assets/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

// ── Optionnel : légendes depuis captions.json ────────────────────────────────
let captionsMap = {};
try {
  const captionModules = import.meta.glob('../assets/carousel/captions.json', { eager: true });
  const captionFile = Object.values(captionModules)[0];
  if (captionFile) captionsMap = captionFile.default ?? captionFile;
} catch (_) {}

// ── Construction de la liste d'images ────────────────────────────────────────
const CAROUSEL_IMAGES = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const filename = path.split('/').pop();
    const info = captionsMap[filename] ?? {};
    return {
      src: mod.default,
      caption: info.caption ?? filename.replace(/^\d+-/, '').replace(/\.[^.]+$/, '').replace(/-/g, ' '),
      description: info.description ?? '',
    };
  });

// ── Placeholder si aucune image n'est encore présente ────────────────────────
const PLACEHOLDER = [
  { src: null, caption: 'University of Pretoria', description: 'Postdoctoral Research — Department of Economics' },
  { src: null, caption: 'Research & Publications', description: 'Energy, Environment and Public Finance' },
  { src: null, caption: 'International Conferences', description: 'Policy research across Sub-Saharan Africa' },
];

const IMAGES = CAROUSEL_IMAGES.length > 0 ? CAROUSEL_IMAGES : PLACEHOLDER;

// ── Composant ─────────────────────────────────────────────────────────────────
function Carousel({ currentTheme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 200);
  };

  const next = () => goTo((currentIndex + 1) % IMAGES.length);
  const prev = () => goTo((currentIndex - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = IMAGES[currentIndex];

  return (
    <div className="mx-auto max-w-7xl px-6 pt-8">
      <div className={`relative overflow-hidden rounded-3xl border ${currentTheme.border} ${currentTheme.cardBg} shadow-2xl`}>
        <div className="relative h-80 md:h-96">

          {/* Image ou placeholder gradient */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            {current.src ? (
              <img
                src={current.src}
                alt={current.caption}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className={`h-full w-full bg-gradient-to-br ${currentTheme.gradient} opacity-20`} />
            )}

            {/* Overlay dégradé pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Texte en bas */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <h3 className="text-xl font-bold text-white capitalize">{current.caption}</h3>
            {current.description && (
              <p className="mt-1 text-sm text-white/75">{current.description}</p>
            )}
          </div>

          {/* Bouton gauche */}
          <button
            onClick={prev}
            aria-label="Image précédente"
            className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full border ${currentTheme.border} bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/50`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {/* Bouton droit */}
          <button
            onClick={next}
            aria-label="Image suivante"
            className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full border ${currentTheme.border} bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/50`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-5 right-6 flex gap-1.5">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Carousel;
