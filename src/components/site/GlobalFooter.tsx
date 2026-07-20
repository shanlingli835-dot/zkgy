import {
  brand,
  footerBeian,
  footerExternalLinks,
  footerNavGroups,
} from "@/content/navigation";

/**
 * GlobalFooter (Story 1.2)
 *
 * 结构：
 * - 品牌区
 * - 站内导航（复用 primaryNav，不含"联系我们"独立分组，contact 作为末列独立呈现）
 * - 外部链接（源站页脚社区/媒体入口）
 * - 备案 + 版权
 *
 * 所有链接文字/目标均来自源站盘点，未纳入本轮页面重构范围的旧 .html 仍以旧路径保留。
 */
export function GlobalFooter() {
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "var(--zksc-surface-inverse)",
        color: "var(--zksc-ink-inverse)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--zksc-content-max-width)",
          margin: "0 auto",
          padding: "var(--zksc-space-8) var(--zksc-gutter-desktop) var(--zksc-space-6)",
        }}
      >
        <div
          className="zksc-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, minmax(0, 1fr))",
            gap: "var(--zksc-space-6)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 22, fontWeight: 700 }}>{brand.name}</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--zksc-primary-soft)",
                  letterSpacing: "0.14em",
                }}
              >
                {brand.short}
              </span>
            </div>
            <p
              style={{
                marginTop: "var(--zksc-space-3)",
                color: "rgba(245,247,246,0.72)",
                fontSize: "var(--zksc-font-size-body-sm)",
                maxWidth: 320,
                lineHeight: 1.7,
              }}
            >
              致力于成为全球领先的低空与商业航天网络安全方案提供商。
            </p>
            <a
              href="/contact.html"
              style={{
                display: "inline-block",
                marginTop: "var(--zksc-space-4)",
                padding: "10px 16px",
                backgroundColor: "var(--zksc-primary)",
                color: "var(--zksc-primary-foreground)",
                borderRadius: "var(--zksc-radius-md)",
                fontSize: "var(--zksc-font-size-body-sm)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              联系我们
            </a>
          </div>

          {footerNavGroups.map((group) => (
            <div key={group.id}>
              <div
                style={{
                  fontSize: "var(--zksc-font-size-label)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(245,247,246,0.6)",
                  marginBottom: "var(--zksc-space-3)",
                }}
              >
                {group.label}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {(group.children ?? [{ label: group.label, href: group.href! }]).map(
                  (link) => (
                    <li key={link.href} style={{ marginBottom: "var(--zksc-space-2)" }}>
                      <a href={link.href} style={footerLinkStyle}>
                        {link.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <div>
            <div
              style={{
                fontSize: "var(--zksc-font-size-label)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(245,247,246,0.6)",
                marginBottom: "var(--zksc-space-3)",
              }}
            >
              社区
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerExternalLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "var(--zksc-space-2)" }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={footerLinkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "var(--zksc-space-7)",
            paddingTop: "var(--zksc-space-4)",
            borderTop: "1px solid rgba(245,247,246,0.12)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "var(--zksc-space-3)",
            fontSize: "var(--zksc-font-size-body-sm)",
            color: "rgba(245,247,246,0.6)",
          }}
        >
          <div>© {year} {brand.name}科技有限公司</div>
          <a
            href={footerBeian.href}
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            {footerBeian.label}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .zksc-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 639px) {
          .zksc-footer-grid {
            grid-template-columns: 1fr !important;
          }
          [style*="var(--zksc-gutter-desktop)"] {}
        }
      `}</style>
    </div>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: "rgba(245,247,246,0.85)",
  fontSize: "var(--zksc-font-size-body-sm)",
  textDecoration: "none",
};
