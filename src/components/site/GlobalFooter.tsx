import { brand, footerBeian, footerExternalLinks, footerNavGroups } from "@/content/navigation";
import { BrandLogo } from "./BrandLogo";

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
        backgroundColor: "var(--ds-color-surface-inverse)",
        color: "var(--ds-color-text-inverse)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          padding: "var(--ds-space-4xl) var(--ds-gutter-desktop) var(--ds-space-2xl)",
        }}
      >
        <div
          className="site-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, minmax(0, 1fr))",
            gap: "var(--ds-space-2xl)",
          }}
        >
          <div>
            <a
              href={brand.homeHref}
              aria-label={`${brand.name} 首页`}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <BrandLogo variant="reverse" height={44} />
            </a>
            <p
              style={{
                marginTop: "var(--ds-space-md)",
                color: "var(--ds-color-text-inverse-secondary)",
                fontSize: "var(--ds-font-size-sm)",
                maxWidth: "var(--ds-container-summary)",
                lineHeight: "var(--ds-line-height-sm)",
              }}
            >
              致力于成为全球领先的低空与商业航天网络安全方案提供商。
            </p>
            <a
              href="/contact.html"
              style={{
                display: "inline-block",
                marginTop: "var(--ds-space-lg)",
                minHeight: "var(--ds-size-control-min)",
                padding: "var(--ds-space-md) var(--ds-space-lg)",
                backgroundColor: "var(--ds-color-action-primary)",
                color: "var(--ds-color-action-primary-foreground)",
                borderRadius: "var(--ds-radius-control)",
                fontSize: "var(--ds-font-size-sm)",
                fontWeight: "var(--ds-font-weight-semibold)",
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
                  fontSize: "var(--ds-font-size-sm)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-inverse-muted)",
                  marginBottom: "var(--ds-space-md)",
                }}
              >
                {group.label}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {(group.children ?? [{ label: group.label, href: group.href! }]).map((link) => (
                  <li key={link.href} style={{ marginBottom: "var(--ds-space-sm)" }}>
                    <a href={link.href} style={footerLinkStyle}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div
              style={{
                fontSize: "var(--ds-font-size-sm)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--ds-color-text-inverse-muted)",
                marginBottom: "var(--ds-space-md)",
              }}
            >
              社区
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerExternalLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "var(--ds-space-sm)" }}>
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
            marginTop: "var(--ds-space-3xl)",
            paddingTop: "var(--ds-space-lg)",
            borderTop: "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "var(--ds-space-md)",
            fontSize: "var(--ds-font-size-sm)",
            color: "var(--ds-color-text-inverse-muted)",
          }}
        >
          <div>
            © {year} {brand.name}科技有限公司
          </div>
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
          .site-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 639px) {
          .site-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: "var(--ds-color-text-inverse-link)",
  fontSize: "var(--ds-font-size-sm)",
  textDecoration: "none",
};
