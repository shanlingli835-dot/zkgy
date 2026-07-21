import type { CSSProperties } from "react";
import {
  GitBranch,
  Bug,
  ShieldCheck,
  Boxes,
  Workflow,
  Terminal,
  Database,
  FileCode2,
  Layers,
  Server,
} from "lucide-react";

/**
 * HomeIntegrations
 *
 * "与您现有的工具和系统无缝集成" 模块。
 * 左侧：标题 + 说明；右侧：5×5 网格散布图标瓷片，表达"接入现有研发/测试/安全系统"。
 * 仅使用 design tokens；图标使用 lucide-react；不引入任何第三方品牌 Logo。
 */

type Tile = { row: number; col: number; Icon?: typeof GitBranch; label?: string };

const tiles: Tile[] = [
  { row: 0, col: 1 },
  { row: 0, col: 3, Icon: GitBranch, label: "版本控制" },
  { row: 1, col: 0 },
  { row: 1, col: 2, Icon: Bug, label: "缺陷跟踪" },
  { row: 1, col: 4, Icon: Workflow, label: "CI/CD" },
  { row: 2, col: 1, Icon: ShieldCheck, label: "安全管理" },
  { row: 2, col: 3, Icon: Boxes, label: "制品仓库" },
  { row: 3, col: 0 },
  { row: 3, col: 2, Icon: Terminal, label: "研发平台" },
  { row: 3, col: 4, Icon: Database, label: "数据平台" },
  { row: 4, col: 1, Icon: FileCode2, label: "代码审计" },
  { row: 4, col: 3, Icon: Server, label: "运维系统" },
  { row: 4, col: 0, Icon: Layers, label: "测试管理" },
];

const CELL = 96;
const GAP = 12;

export function HomeIntegrations() {
  return (
    <section
      aria-labelledby="home-integrations-title"
      className="home-section"
      style={{
        backgroundColor: "var(--ds-color-canvas)",
        color: "var(--ds-color-text-primary)",
        paddingBlock: "var(--ds-section-y-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          marginInline: "auto",
          paddingInline: "var(--ds-gutter-desktop)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "var(--ds-space-3xl)",
          alignItems: "center",
        }}
        className="home-integrations-grid"
      >
        {/* 左侧文字 */}
        <div style={{ maxWidth: "48ch" }}>
          <h2
            id="home-integrations-title"
            style={{
              margin: 0,
              fontSize: "var(--ds-font-size-3xl)",
              lineHeight: "var(--ds-line-height-3xl)",
              fontWeight: "var(--ds-font-weight-semibold)",
              color: "var(--ds-color-text-primary)",
            }}
          >
            与您现有的工具和系统无缝集成
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
            对接现有研发、测试与安全管理系统，将检测、分析和处置结果纳入既有流程，减少系统割裂与重复操作。
          </p>
        </div>

        {/* 右侧网格 */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(5, ${CELL}px)`,
              gridTemplateRows: `repeat(5, ${CELL}px)`,
              gap: `${GAP}px`,
              position: "relative",
            }}
            className="home-integrations-tiles"
          >
            {tiles.map((t) => (
              <IntegrationTile key={`${t.row}-${t.col}`} tile={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .home-integrations-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .home-integrations-tiles {
            grid-template-columns: repeat(5, 60px) !important;
            grid-template-rows: repeat(5, 60px) !important;
          }
        }
      `}</style>
    </section>
  );
}

function IntegrationTile({ tile }: { tile: Tile }) {
  const style: CSSProperties = {
    gridColumnStart: tile.col + 1,
    gridRowStart: tile.row + 1,
    borderRadius: "var(--ds-radius-surface)",
    border: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
    backgroundColor: tile.Icon
      ? "var(--ds-color-surface-default)"
      : "var(--ds-color-surface-subtle)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ds-color-action-primary)",
    boxShadow: tile.Icon
      ? "0 1px 2px rgba(15, 23, 42, 0.04)"
      : "none",
  };
  const Icon = tile.Icon;
  return (
    <div style={style} aria-label={tile.label}>
      {Icon ? <Icon size={28} strokeWidth={1.75} /> : null}
    </div>
  );
}
