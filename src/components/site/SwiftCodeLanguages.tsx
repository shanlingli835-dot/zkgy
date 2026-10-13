import { CTA_HREF, PrimaryCta } from "@/components/site/ProductPageKit";
import logoC from "@/assets/lang/c.svg";
import logoCpp from "@/assets/lang/cpp.svg";
import logoJava from "@/assets/lang/java.svg";
import logoCsharp from "@/assets/lang/csharp.svg";
import logoPython from "@/assets/lang/python.svg";
import logoKotlin from "@/assets/lang/kotlin.svg";
import logoObjc from "@/assets/lang/objectivec.svg";
import logoSwift from "@/assets/lang/swift.svg";
import logoJs from "@/assets/lang/javascript.svg";
import logoTs from "@/assets/lang/typescript.svg";
import logoGo from "@/assets/lang/go.svg";
import logoRust from "@/assets/lang/rust.svg";
import logoPhp from "@/assets/lang/php.svg";
import logoRuby from "@/assets/lang/ruby.svg";
import logoPerl from "@/assets/lang/perl.svg";
import logoLua from "@/assets/lang/lua.svg";
import logoScala from "@/assets/lang/scala.svg";
import logoDelphi from "@/assets/lang/delphi.svg";
import logoShell from "@/assets/lang/shell.svg";

/**
 * SwiftCodeLanguages
 *
 * "支持20多种开发语言" 模块。
 * 排版参考 integrations-4：左侧标题 + 说明 + 主操作，右侧 5×5 散布瓷片网格，
 * 外缘用径向渐变遮罩淡出。瓷片内容为各语言官方 Logo（devicon 图标库），
 * 「汇编」无官方 Logo，保留文字瓷片。
 */

type Tile = {
  row: number;
  col: number;
  label?: string;
  logo?: string;
  muted?: boolean;
};

const CELL = 72;
const GRID = CELL * 5;

const tiles: Tile[] = [
  { row: 0, col: 0, label: "C", logo: logoC },
  { row: 0, col: 1 },
  { row: 0, col: 2, label: "C++", logo: logoCpp },
  { row: 0, col: 3, label: "Java", logo: logoJava },
  { row: 0, col: 4, label: "C#", logo: logoCsharp },
  { row: 1, col: 0, label: "Python", logo: logoPython },
  { row: 1, col: 1, label: "Kotlin", logo: logoKotlin },
  { row: 1, col: 2 },
  { row: 1, col: 3, label: "Objective-C", logo: logoObjc, muted: true },
  { row: 1, col: 4, label: "Swift", logo: logoSwift },
  { row: 2, col: 0 },
  { row: 2, col: 1, label: "JavaScript", logo: logoJs },
  { row: 2, col: 2, label: "TypeScript", logo: logoTs },
  { row: 2, col: 3, label: "Go", logo: logoGo },
  { row: 2, col: 4, label: "Rust", logo: logoRust, muted: true },
  { row: 3, col: 0, label: "PHP", logo: logoPhp },
  { row: 3, col: 1, label: "Ruby", logo: logoRuby, muted: true },
  { row: 3, col: 2 },
  { row: 3, col: 3, label: "Perl", logo: logoPerl, muted: true },
  { row: 3, col: 4, label: "Lua", logo: logoLua, muted: true },
  { row: 4, col: 0, label: "Scala", logo: logoScala, muted: true },
  { row: 4, col: 1 },
  { row: 4, col: 2, label: "Delphi", logo: logoDelphi, muted: true },
  { row: 4, col: 3, label: "Shell", logo: logoShell, muted: true },
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
          .swiftcode-languages-tiles > div {
            font-size: 10px !important;
            padding: 2px !important;
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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: tile.logo ? "14px" : "4px",
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
