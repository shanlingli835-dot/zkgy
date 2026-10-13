import { PrimaryCta } from "@/components/site/ProductPageKit";
import { CTA_HREF } from "@/components/site/ProductPageKit";

/**
 * SwiftCodeLanguages
 *
 * "支持20多种开发语言" 模块。
 * 排版参考 integrations-4：左侧标题 + 说明 + 主操作，右侧 5×5 散布瓷片网格，
 * 外缘用径向渐变遮罩淡出。瓷片内容为 Swift Code 支持的开发语言名称（源站页面
 * 无法访问，清单为通用拟稿，可随时替换）。
 */

type Tile = { row: number; col: number; label?: string };

const CELL = 72;
const GRID = CELL * 5;

const tiles: Tile[] = [
  { row: 0, col: 0, label: "C" },
  { row: 0, col: 1 },
  { row: 0, col: 2, label: "C++" },
  { row: 0, col: 3, label: "Java" },
  { row: 0, col: 4, label: "C#" },
  { row: 1, col: 0, label: "Python" },
  { row: 1, col: 1, label: "Kotlin" },
  { row: 1, col: 2 },
  { row: 1, col: 3, label: "Objective-C" },
  { row: 1, col: 4, label: "Swift" },
  { row: 2, col: 0 },
  { row: 2, col: 1, label: "JavaScript" },
  { row: 2, col: 2, label: "TypeScript" },
  { row: 2, col: 3, label: "Go" },
  { row: 2, col: 4, label: "Rust" },
  { row: 3, col: 0, label: "PHP" },
  { row: 3, col: 1, label: "Ruby" },
  { row: 3, col: 2 },
  { row: 3, col: 3, label: "Perl" },
  { row: 3, col: 4, label: "Lua" },
  { row: 4, col: 0, label: "Scala" },
  { row: 4, col: 1 },
  { row: 4, col: 2, label: "Delphi" },
  { row: 4, col: 3, label: "Shell" },
  { row: 4, col: 4, label: "汇编" },
];

export function SwiftCodeLanguages() {
  return (
    <section
      aria-labelledby="swiftcode-languages-title"
      style={{
        backgroundColor: "var(--ds-color-surface-default)",
        color: "var(--ds-color-text-primary)",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        className="swiftcode-languages-grid"
        style={{
          maxWidth: "var(--ds-container-page)",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "var(--ds-space-3xl)",
          alignItems: "center",
        }}
      >
        {/* 左侧文字 */}
        <div style={{ maxWidth: "48ch" }}>
          <h2
            id="swiftcode-languages-title"
            style={{
              margin: 0,
              fontSize: "var(--ds-font-size-3xl)",
              lineHeight: "var(--ds-line-height-3xl)",
              fontWeight: "var(--ds-font-weight-semibold)",
              color: "var(--ds-color-text-primary)",
            }}
          >
            支持20多种开发语言
          </h2>
          <p
            style={{
              marginTop: "var(--ds-space-lg)",
              marginBottom: 0,
              fontSize: "var(--ds-font-size-lg)",
              lineHeight: "var(--ds-line-height-lg)",
              color: "var(--ds-color-text-secondary)",
            }}
          >
            自动识别150多种代码文件，自带3000多条检测规则，开放扫描规则源代码，支持用户自定义。
          </p>
          <div style={{ marginTop: "var(--ds-space-2xl)" }}>
            <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
          </div>
        </div>

        {/* 右侧散布瓷片 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="swiftcode-languages-tiles"
            role="list"
            aria-label="Swift Code 支持的开发语言"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(5, ${CELL}px)`,
              gridTemplateRows: `repeat(5, ${CELL}px)`,
              width: GRID,
              height: GRID,
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            }}
          >
            {tiles.map((tile) => (
              <LanguageTile key={`${tile.row}-${tile.col}`} tile={tile} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .swiftcode-languages-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .swiftcode-languages-tiles {
            grid-template-columns: repeat(5, 56px) !important;
            grid-template-rows: repeat(5, 56px) !important;
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

function LanguageTile({ tile }: { tile: Tile }) {
  if (!tile.label) {
    return (
      <div
        aria-hidden="true"
        role="presentation"
        style={{
          backgroundColor: "var(--ds-color-surface-subtle)",
        }}
      />
    );
  }
  return (
    <div
      role="listitem"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
        backgroundColor: "var(--ds-color-surface-default)",
        border: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
        borderRadius: "var(--ds-radius-surface)",
        boxShadow: "var(--ds-shadow-sm)",
        color: "var(--ds-color-text-primary)",
        fontSize: "12px",
        fontWeight: "var(--ds-font-weight-medium)",
        textAlign: "center",
        lineHeight: 1.4,
      }}
    >
      {tile.label}
    </div>
  );
}
