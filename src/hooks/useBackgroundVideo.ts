import { RefObject, useEffect, useRef } from 'react';

interface UseBackgroundVideoOptions {
  /** Only attempt playback when the video is visible in the viewport */
  playWhenVisible?: boolean;
  /** Root margin for visibility detection */
  rootMargin?: string;
}

export function useBackgroundVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  options: UseBackgroundVideoOptions = {}
) {
  const { playWhenVisible = false, rootMargin = '100px' } = options;
  const hasStartedRef = useRef(false);
  const interactionCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensureMuted = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
    };

    const cleanupInteractionListeners = () => {
      interactionCleanupRef.current?.();
      interactionCleanupRef.current = null;
    };

    const tryPlay = async () => {
      if (hasStartedRef.current) return;

      ensureMuted();
      try {
        await video.play();
        hasStartedRef.current = true;
        cleanupInteractionListeners();
      } catch {
        if (!interactionCleanupRef.current) {
          const playOnInteraction = () => {
            ensureMuted();
            video
              .play()
              .then(() => {
                hasStartedRef.current = true;
                cleanupInteractionListeners();
              })
              .catch(() => {});
          };

          const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;
          events.forEach((event) => {
            document.addEventListener(event, playOnInteraction, { passive: true });
          });

          interactionCleanupRef.current = () => {
            events.forEach((event) => {
              document.removeEventListener(event, playOnInteraction);
            });
          };
        }
      }
    };

    const handleCanPlay = () => {
      if (!playWhenVisible) {
        tryPlay();
      }
    };

    ensureMuted();

    let observer: IntersectionObserver | undefined;
    if (playWhenVisible) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            tryPlay();
          }
        },
        { rootMargin, threshold: 0 }
      );
      observer.observe(video);
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !playWhenVisible) {
      tryPlay();
    }

    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      observer?.disconnect();
      cleanupInteractionListeners();
    };
  }, [videoRef, playWhenVisible, rootMargin]);
}
