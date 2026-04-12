'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';

import { axisFactors } from '../_data/offerExperience';

type RetomadaAxisSceneProps = {
  profileLabel: string;
  variant?: 'default' | 'support';
};

type SceneStyle = CSSProperties & Record<string, string>;

const initialSceneStyle: SceneStyle = {
  '--scene-shell-transform': 'rotateX(6deg) rotateY(-8deg) translateZ(0px)',
  '--grid-transform': 'translate3d(0px, 0px, -12px) scale(1.02)',
  '--back-transform': 'translate3d(-14px, -8px, -128px) scale(1.08)',
  '--mid-transform': 'translate3d(10px, 12px, -32px) scale(1.03)',
  '--spine-transform': 'translate3d(0px, 0px, 18px)',
  '--focus-transform':
    'translate3d(-50%, -50%, 36px) rotateX(0deg) rotateY(0deg)',
  '--center-transform':
    'translate3d(-50%, -50%, 76px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
  '--node-1-transform':
    'translate3d(-22px, -14px, 48px) rotateX(-4deg) rotateY(9deg) rotateZ(-8deg)',
  '--node-2-transform':
    'translate3d(22px, -22px, 28px) rotateX(3deg) rotateY(-10deg) rotateZ(7deg)',
  '--node-3-transform':
    'translate3d(-14px, 20px, 36px) rotateX(4deg) rotateY(7deg) rotateZ(-6deg)',
  '--result-transform':
    'translate3d(10px, 8px, 58px) rotateX(-1deg) rotateY(6deg) rotateZ(4deg)',
  '--focus-opacity': '0.58',
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function RetomadaAxisScene({
  profileLabel,
  variant = 'default',
}: RetomadaAxisSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const finePointerQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (reducedMotionQuery.matches || !finePointerQuery.matches) {
      scene.dataset.interactive = 'false';
      return;
    }

    let frameId = 0;
    let pointerInside = false;

    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const applyTransforms = (x: number, y: number) => {
      const intensity = variant === 'support' ? 0.78 : 1;

      scene.style.setProperty(
        '--scene-shell-transform',
        `rotateX(${(6 + y * -4.4 * intensity).toFixed(2)}deg) rotateY(${(-8 + x * 7.2 * intensity).toFixed(2)}deg) translateZ(0px)`
      );
      scene.style.setProperty(
        '--grid-transform',
        `translate3d(${(x * -8 * intensity).toFixed(2)}px, ${(y * -7 * intensity).toFixed(2)}px, -12px) scale(1.02)`
      );
      scene.style.setProperty(
        '--back-transform',
        `translate3d(${(-14 + x * -18 * intensity).toFixed(2)}px, ${(-8 + y * -12 * intensity).toFixed(2)}px, -128px) scale(1.08)`
      );
      scene.style.setProperty(
        '--mid-transform',
        `translate3d(${(10 + x * 12 * intensity).toFixed(2)}px, ${(12 + y * 10 * intensity).toFixed(2)}px, -32px) scale(1.03)`
      );
      scene.style.setProperty(
        '--spine-transform',
        `translate3d(${(x * 5 * intensity).toFixed(2)}px, ${(y * 4 * intensity).toFixed(2)}px, 18px)`
      );
      scene.style.setProperty(
        '--focus-transform',
        `translate3d(calc(-50% + ${(x * 6 * intensity).toFixed(2)}px), calc(-50% + ${(y * 5 * intensity).toFixed(2)}px), 36px) rotateX(${(y * -1.8 * intensity).toFixed(2)}deg) rotateY(${(x * 2.4 * intensity).toFixed(2)}deg)`
      );
      scene.style.setProperty(
        '--center-transform',
        `translate3d(calc(-50% + ${(x * 4 * intensity).toFixed(2)}px), calc(-50% + ${(y * 3 * intensity).toFixed(2)}px), 76px) rotateX(${(y * -1.6 * intensity).toFixed(2)}deg) rotateY(${(x * 2.2 * intensity).toFixed(2)}deg) rotateZ(${(x * 1.2 * intensity).toFixed(2)}deg)`
      );
      scene.style.setProperty(
        '--node-1-transform',
        `translate3d(${(-22 + x * -13 * intensity).toFixed(2)}px, ${(-14 + y * -9 * intensity).toFixed(2)}px, 48px) rotateX(${(-4 + y * -2.4 * intensity).toFixed(2)}deg) rotateY(${(9 + x * 5.8 * intensity).toFixed(2)}deg) rotateZ(-8deg)`
      );
      scene.style.setProperty(
        '--node-2-transform',
        `translate3d(${(22 + x * -11 * intensity).toFixed(2)}px, ${(-22 + y * 8 * intensity).toFixed(2)}px, 28px) rotateX(${(3 + y * -2.2 * intensity).toFixed(2)}deg) rotateY(${(-10 + x * 5.2 * intensity).toFixed(2)}deg) rotateZ(7deg)`
      );
      scene.style.setProperty(
        '--node-3-transform',
        `translate3d(${(-14 + x * 9 * intensity).toFixed(2)}px, ${(20 + y * -8 * intensity).toFixed(2)}px, 36px) rotateX(${(4 + y * 2.1 * intensity).toFixed(2)}deg) rotateY(${(7 + x * 4.8 * intensity).toFixed(2)}deg) rotateZ(-6deg)`
      );
      scene.style.setProperty(
        '--result-transform',
        `translate3d(${(10 + x * -6 * intensity).toFixed(2)}px, ${(8 + y * -5 * intensity).toFixed(2)}px, 58px) rotateX(${(-1 + y * -1.8 * intensity).toFixed(2)}deg) rotateY(${(6 + x * 4.4 * intensity).toFixed(2)}deg) rotateZ(4deg)`
      );
      scene.style.setProperty(
        '--focus-opacity',
        (0.58 + Math.min(Math.abs(x) + Math.abs(y), 1) * 0.08 * intensity).toFixed(2)
      );
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.085;
      current.y += (target.y - current.y) * 0.085;

      applyTransforms(current.x, current.y);

      const moving =
        Math.abs(target.x - current.x) > 0.002 ||
        Math.abs(target.y - current.y) > 0.002;
      const resting = Math.abs(current.x) > 0.002 || Math.abs(current.y) > 0.002;

      if (pointerInside || moving || resting) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        frameId = 0;
      }
    };

    const ensureFrame = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    const updateTarget = (clientX: number, clientY: number) => {
      const rect = scene.getBoundingClientRect();
      const nextX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const nextY = ((clientY - rect.top) / rect.height - 0.5) * 2;

      target.x = clamp(nextX, -1, 1);
      target.y = clamp(nextY, -1, 1);
      ensureFrame();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerInside = true;
      scene.dataset.interactive = 'true';
      updateTarget(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      pointerInside = false;
      scene.dataset.interactive = 'false';
      target.x = 0;
      target.y = 0;
      ensureFrame();
    };

    scene.dataset.interactive = 'false';
    applyTransforms(0, 0);

    scene.addEventListener('pointermove', handlePointerMove, { passive: true });
    scene.addEventListener('pointerenter', handlePointerMove, { passive: true });
    scene.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      scene.removeEventListener('pointermove', handlePointerMove);
      scene.removeEventListener('pointerenter', handlePointerMove);
      scene.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [variant]);

  return (
    <div
      ref={sceneRef}
      className={`axis-scene axis-scene-interactive axis-scene-${variant}`}
      style={initialSceneStyle}
    >
      <div className="axis-interface axis-interface-top">
        <span className="axis-interface-label">Eixo de retomada</span>
        <strong>Entrada coerente</strong>
      </div>

      {variant !== 'support' ? (
        <div className="axis-interface axis-interface-top-right">
          <span className="axis-interface-label">Fenômeno ECR</span>
          <strong>Entrada certa responsiva</strong>
        </div>
      ) : null}

      {variant !== 'support' ? (
        <div className="axis-interface axis-interface-bottom">
          <span className="axis-interface-dot" />
          <span>O eixo estabiliza a cena antes de cobrar intensidade.</span>
        </div>
      ) : null}

      <div className="axis-depth-layer axis-depth-layer-back" />
      <div className="axis-depth-layer axis-depth-layer-mid" />
      <div className="axis-grid axis-grid-depth" />
      <div className="axis-spine axis-spine-vertical" />
      <div className="axis-spine axis-spine-horizontal" />
      <div className="axis-link axis-link-1" />
      <div className="axis-link axis-link-2" />
      <div className="axis-link axis-link-3" />
      <div className="axis-focus-ring" />
      <div className="axis-focus-core" />
      <div className="axis-focus-aura" />

      <div className="axis-center axis-center-panel">
        <div className="axis-center-head">
          <span className="axis-kicker">Mapa ativo</span>
          <span className="axis-center-state">organizando a cena</span>
        </div>

        <strong>{profileLabel}</strong>
        <p>Direção antes de intensidade para voltar ao trilho certo.</p>

        <div className="axis-center-metrics" aria-hidden="true">
          {axisFactors.map((item) => (
            <span className="axis-center-chip" key={item.label}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {axisFactors.map((item, index) => (
        <div
          className={`axis-node axis-node-${index + 1} axis-node-panel`}
          key={item.label}
        >
          <div className="axis-node-head">
            <span>{item.label}</span>
            <span className="axis-node-dot" />
          </div>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="axis-result axis-result-panel">
        <span>COMEÇO CERTO</span>
        <strong>Progressão possível</strong>
        <p className="axis-result-note">Menos improviso, mais constância.</p>

        {variant !== 'support' ? (
          <div className="axis-result-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : null}
      </div>

      <style jsx>{`
        .axis-scene-interactive {
          transform: var(--scene-shell-transform);
          transform-style: preserve-3d;
          will-change: transform;
          transition: box-shadow 220ms ease, border-color 220ms ease;
          touch-action: pan-y;
        }

        .axis-scene-interactive[data-interactive='true'] {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 36px 92px rgba(0, 0, 0, 0.52),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .axis-interface,
        .axis-depth-layer,
        .axis-spine,
        .axis-link,
        .axis-focus-ring,
        .axis-focus-core,
        .axis-focus-aura {
          position: absolute;
          pointer-events: none;
        }

        .axis-interface {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(19, 26, 35, 0.72);
          color: var(--text-secondary);
          backdrop-filter: blur(12px);
          z-index: 3;
        }

        .axis-interface strong {
          color: var(--text-primary);
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .axis-interface-top {
          top: 18px;
          left: 18px;
        }

        .axis-interface-top-right {
          top: 18px;
          right: 18px;
        }

        .axis-interface-bottom {
          left: 18px;
          bottom: 18px;
          max-width: 296px;
          padding-right: 14px;
        }

        .axis-interface-label {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .axis-interface-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--accent-support), var(--accent));
          box-shadow: 0 0 0 6px rgba(61, 214, 198, 0.08);
        }

        .axis-depth-layer {
          inset: 0;
          border-radius: 32px;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .axis-depth-layer-back {
          transform: var(--back-transform);
          background:
            radial-gradient(
              circle at 26% 24%,
              rgba(61, 214, 198, 0.08),
              transparent 18%
            ),
            radial-gradient(
              circle at 78% 70%,
              rgba(124, 255, 107, 0.08),
              transparent 24%
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.02),
              transparent 26%,
              rgba(255, 255, 255, 0.015)
            );
          opacity: 0.54;
          filter: blur(2px);
        }

        .axis-depth-layer-mid {
          inset: 8% 6% 10% 8%;
          transform: var(--mid-transform);
          border: 1px solid rgba(255, 255, 255, 0.05);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.04),
              transparent 36%
            ),
            linear-gradient(
              180deg,
              rgba(61, 214, 198, 0.05),
              rgba(255, 255, 255, 0.01)
            );
          opacity: 0.44;
        }

        .axis-grid-depth {
          transform: var(--grid-transform);
          transform-style: preserve-3d;
          will-change: transform;
        }

        .axis-spine,
        .axis-link {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .axis-spine {
          left: 50%;
          top: 50%;
          transform: var(--spine-transform);
        }

        .axis-spine-vertical {
          width: 2px;
          height: 64%;
          margin-left: -1px;
          margin-top: -32%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(61, 214, 198, 0.38),
            rgba(255, 255, 255, 0.16),
            transparent
          );
        }

        .axis-spine-horizontal {
          width: 58%;
          height: 2px;
          margin-left: -29%;
          margin-top: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            rgba(124, 255, 107, 0.28),
            transparent
          );
          opacity: 0.56;
        }

        .axis-link {
          left: 50%;
          top: 50%;
          height: 1px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            rgba(61, 214, 198, 0.02),
            rgba(61, 214, 198, 0.22),
            rgba(124, 255, 107, 0.12)
          );
          opacity: 0.44;
        }

        .axis-link-1 {
          width: 140px;
          margin-left: -166px;
          margin-top: -92px;
          transform: rotate(-26deg) translateZ(16px);
        }

        .axis-link-2 {
          width: 136px;
          margin-left: 34px;
          margin-top: -100px;
          transform: rotate(24deg) translateZ(12px);
        }

        .axis-link-3 {
          width: 128px;
          margin-left: -152px;
          margin-top: 92px;
          transform: rotate(30deg) translateZ(14px);
        }

        .axis-focus-ring,
        .axis-focus-core,
        .axis-focus-aura {
          left: 50%;
          top: 50%;
          border-radius: 999px;
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }

        .axis-focus-ring {
          width: 226px;
          height: 226px;
          margin-left: -113px;
          margin-top: -113px;
          transform: var(--focus-transform);
          border: 1px solid rgba(61, 214, 198, 0.14);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 0 64px rgba(61, 214, 198, 0.08);
          opacity: var(--focus-opacity);
        }

        .axis-focus-core {
          width: 128px;
          height: 128px;
          margin-left: -64px;
          margin-top: -64px;
          transform: var(--focus-transform);
          background: radial-gradient(
            circle,
            rgba(61, 214, 198, 0.16),
            rgba(61, 214, 198, 0.04) 54%,
            transparent 74%
          );
          opacity: 0.58;
        }

        .axis-focus-aura {
          width: 320px;
          height: 320px;
          margin-left: -160px;
          margin-top: -160px;
          transform: translate3d(-50%, -50%, -12px);
          background: radial-gradient(
            circle,
            rgba(61, 214, 198, 0.08),
            transparent 68%
          );
          opacity: 0.42;
        }

        .axis-center-panel {
          transform: var(--center-transform);
          will-change: transform;
        }

        .axis-center-head,
        .axis-node-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .axis-center-state {
          color: var(--text-secondary);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .axis-center-metrics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .axis-center-chip {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .axis-node-panel,
        .axis-result-panel {
          will-change: transform;
          backface-visibility: hidden;
        }

        .axis-node-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 999px;
          background: rgba(249, 115, 22, 0.9);
          box-shadow: 0 0 0 5px rgba(249, 115, 22, 0.08);
        }

        .axis-node-1 {
          transform: var(--node-1-transform);
        }

        .axis-node-2 {
          transform: var(--node-2-transform);
        }

        .axis-node-3 {
          transform: var(--node-3-transform);
        }

        .axis-result-panel {
          transform: var(--result-transform);
          background:
            linear-gradient(
              180deg,
              rgba(24, 33, 45, 0.96),
              rgba(19, 26, 35, 0.92)
            );
        }

        .axis-result-note {
          margin: 12px 0 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .axis-result-bars {
          display: grid;
          gap: 7px;
          margin-top: 16px;
        }

        .axis-result-bars span {
          display: block;
          height: 6px;
          border-radius: 999px;
          background:
            linear-gradient(
              90deg,
              rgba(61, 214, 198, 0.86),
              rgba(124, 255, 107, 0.82)
            );
        }

        .axis-result-bars span:nth-child(1) {
          width: 72%;
        }

        .axis-result-bars span:nth-child(2) {
          width: 88%;
        }

        .axis-result-bars span:nth-child(3) {
          width: 96%;
        }

        .axis-scene-support .axis-center {
          width: min(66%, 280px);
        }

        .axis-scene-support .axis-node {
          width: min(36%, 182px);
          padding: 16px;
        }

        .axis-scene-support .axis-node p {
          font-size: 13px;
          line-height: 1.48;
        }

        .axis-scene-support .axis-result {
          width: min(38%, 186px);
        }

        .axis-scene-support .axis-focus-aura {
          opacity: 0.26;
        }

        .axis-scene-support .axis-interface {
          background: rgba(19, 26, 35, 0.62);
          opacity: 0.92;
        }

        .axis-center-panel,
        .axis-node-panel,
        .axis-result-panel {
          transition:
            border-color 220ms ease,
            background 220ms ease,
            box-shadow 220ms ease;
        }

        .axis-scene-interactive[data-interactive='true'] .axis-center-panel,
        .axis-scene-interactive[data-interactive='true'] .axis-node-panel,
        .axis-scene-interactive[data-interactive='true'] .axis-result-panel {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.34);
        }

        @media (prefers-reduced-motion: reduce) {
          .axis-scene-interactive,
          .axis-depth-layer,
          .axis-grid-depth,
          .axis-spine,
          .axis-link,
          .axis-focus-ring,
          .axis-focus-core,
          .axis-focus-aura,
          .axis-center-panel,
          .axis-node-panel,
          .axis-result-panel {
            transition: none;
            will-change: auto;
          }
        }

        @media (max-width: 640px) {
          .axis-scene-interactive {
            transform: none;
          }

          .axis-interface {
            position: static;
            width: auto;
            justify-content: flex-start;
          }

          .axis-depth-layer-back,
          .axis-depth-layer-mid,
          .axis-focus-ring {
            opacity: 0.36;
          }

          .axis-focus-core {
            opacity: 0.42;
          }

          .axis-focus-aura {
            display: none;
          }

          .axis-grid-depth,
          .axis-spine,
          .axis-link,
          .axis-center-panel,
          .axis-node-1,
          .axis-node-2,
          .axis-node-3,
          .axis-result-panel {
            transform: none;
          }

          .axis-center-metrics {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
