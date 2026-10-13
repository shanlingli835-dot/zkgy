import { CTA_HREF, PrimaryCta } from "@/components/site/ProductPageKit";
import logoC from "@/assets/lang/c.svg";
import logoCpp from "@/assets/lang/cpp.svg";
import logoJava from "@/assets/lang/java.svg";
import logoCsharp from "@/assets/lang/csharp.svg";
import logoPython from "@/assets/lang/python.svg";
import logoKotlin from "@/assets/lang/kotlin.svg";
import logoSwift from "@/assets/lang/swift.svg";
import logoJs from "@/assets/lang/javascript.svg";
import logoTs from "@/assets/lang/typescript.svg";
import logoGo from "@/assets/lang/go.svg";
import logoPhp from "@/assets/lang/php.svg";

/**
 * SwiftCodeLanguages
 *
 * "支持20多种开发语言" 模块。
 * 排版参考 integrations-4：左侧标题 + 说明 + 主操作，右侧散布瓷片网格，
 * 外缘用径向渐变遮罩淡出。瓷片内容为各语言官方 Logo（devicon 图标库），
 * 「汇编」无官方 Logo，保留文字瓷片。
 */

type Tile = { row: number; col: number; label?: string; logo?: string };

const CELL = 80;
const COLS = 4;
const ROWS = 4;
const GRID = CELL * COLS;

/** 四角留空，瓷片聚成中心密、四角疏的簇，配合径向遮罩自然淡出。 */
const tiles: Tile[] = [
  { row: 0, col: 1, label: "C", logo: logoC },
  { row: 0, col: 2, label: "C++", logo: logoCpp },
  { row: 1, col: 0, label: "Java", logo: logoJava },
  { row: 1, col: 1, label: "C#", logo: logoCsharp },
  { row: 1, col: 2, label: "Python", logo: logoPython },
  { row: 1, col: 3, label: "Kotlin", logo: logoKotlin },
  { row: 2, col: 0, label: "Swift", logo: logoSwift },
  { row: 2, col: 1, label: "JavaScript", logo: logoJs },
  { row: 2, col: 2, label: "TypeScript", logo: logoTs },
  { row: 2, col: 3, label: "Go", logo: logoGo },
  { row: 3, col: 1, label: "PHP", logo: logoPhp },
  { row: 3, col: 2, label: "汇编" },
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
              gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
              gridTemplateRows: `repeat(${ROWS}, ${CELL}px)`,
              width: GRID,
              height: CELL * ROWS,
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
            grid-template-columns: repeat(${COLS}, 60px) !important;
            grid-template-rows: repeat(${ROWS}, 60px) !important;
            width: ${COLS * 60}px !important;
            height: ${ROWS * 60}px !important;
          }
          .swiftcode-languages-tiles > div {
            font-size: 10px !important;
          }
          .swiftcode-languages-tile--logo {
            padding: 12px !important;
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
      title={tile.label}
      className={tile.logo ? "swiftcode-languages-tile--logo" : undefined}
      style={{
        gridRow: tile.row + 1,
        gridColumn: tile.col + 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: tile.logo ? "16px" : "4px",
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
      {tile.logo ? (
        <img
          src={tile.logo}
          alt={tile.label}
          width={40}
          height={40}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        tile.label
      )}
    </div>
  );
}
