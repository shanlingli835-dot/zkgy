import type { ReactNode } from "react";

import { Link } from "@/components/ui/link";
import {
  brand,
  footerAboutLinks,
  footerBeian,
  footerHomepageNav,
  footerUtilityLinks,
} from "@/content/navigation";

import { BrandLogo } from "./BrandLogo";
import "./global-footer.css";

export function GlobalFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div className="global-footer__inner">
        <div className="global-footer__brand-row">
          <Link
            to={brand.homeHref}
            variant="navigation"
            tone="inverse"
            aria-label={`${brand.name} 首页`}
            className="global-footer__logo-link"
          >
            <BrandLogo variant="reverse" />
          </Link>

          <nav className="global-footer__utilities" aria-label="页脚快捷联系">
            {footerUtilityLinks.map((item, index) => (
              <Link
                key={`${item.href}-${item.label}`}
                to={item.href}
                variant="navigation"
                tone="inverse"
                aria-label={item.label}
                className="global-footer__utility-link"
              >
                <FooterUtilityIcon index={index} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="global-footer__navigation">
          {footerHomepageNav.map((group) => (
            <nav key={group.id} aria-label={`${group.label}页脚导航`}>
              <h2 className="global-footer__heading">{group.label}</h2>
              <ul className="global-footer__link-list">
                {group.children?.map((item) => (
                  <li key={`${group.id}-${item.href}-${item.label}`}>
                    <Link to={item.href} variant="standalone" tone="inverse">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section className="global-footer__about" aria-labelledby="global-footer-about-title">
            <h2 className="global-footer__heading" id="global-footer-about-title">
              关于中科固源
            </h2>
            <p>
              中科固源秉承创新理念，不断推动技术进步，旨在成为国内乃至国际领先的网络安全测试工具供应商。
            </p>
            <ul className="global-footer__about-links">
              {footerAboutLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link to={item.href} variant="standalone" tone="inverse">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="global-footer__language" aria-label="当前页面语言：简体中文">
              <GlobeIcon />
              <span>简体中文</span>
            </div>
          </section>
        </div>
      </div>

      <div className="global-footer__legal">
        <span>© {year} 中科数测固源科技(安徽)有限公司</span>
        <Link to={footerBeian.href} variant="standalone" tone="inverse" target="_blank">
          {footerBeian.label}
        </Link>
      </div>
    </div>
  );
}

function FooterUtilityIcon({ index }: { index: number }) {
  const icons: ReactNode[] = [
    <path
      key="mail"
      d="M2.5 4.5h15v11h-15v-11Zm1.8 1.7 5.7 4.1 5.7-4.1H4.3Zm11.5 7.6V8.2l-5.3 3.8a.8.8 0 0 1-.9 0L4.2 8.2v5.6h11.6Z"
    />,
    <path
      key="phone"
      d="M6.1 3.2 8 7.3 6.7 8.6c.8 1.7 2.2 3.1 4 4l1.3-1.3 4.1 1.9-.7 3.2c-.1.5-.6.8-1.1.8C8 17.2 2.8 12 2.8 5.7c0-.5.3-1 .8-1.1l2.5-.6Z"
    />,
    <path
      key="partners"
      d="M7.8 4.2c-3 0-5.4 1.9-5.4 4.3 0 1.4.8 2.6 2.1 3.4l-.5 2 2.2-1.2c.5.1 1 .2 1.6.2 3 0 5.4-1.9 5.4-4.3S10.8 4.2 7.8 4.2Zm5.6 5.8c2.4.2 4.2 1.8 4.2 3.7 0 1.1-.6 2.1-1.7 2.8l.4 1.5-1.8-.9c-.4.1-.8.1-1.2.1-2.4 0-4.4-1.5-4.7-3.5 2.4-.2 4.4-1.7 4.8-3.7Z"
    />,
    <path
      key="more"
      d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm0 1.6c.8 0 1.6.2 2.3.5-.4.7-.8 1.6-.9 2.6H8.6c-.2-1-.5-1.8-.9-2.6.7-.3 1.5-.5 2.3-.5ZM4.5 8h2.7c-.1.9-.1 2.1 0 3H4.5a5.5 5.5 0 0 1 0-3Zm5.5 7.7c-.8 0-1.6-.2-2.3-.5.4-.8.7-1.6.9-2.6h2.8c.2 1 .5 1.8.9 2.6-.7.3-1.5.5-2.3.5Zm1.7-4.7H8.3c-.1-.9-.1-2.1 0-3h3.4c.1.9.1 2.1 0 3Zm1.1 0c.1-.9.1-2.1 0-3h2.7a5.5 5.5 0 0 1 0 3h-2.7Z"
    />,
  ];

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {icons[index]}
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm5.8 6.7h-3c-.1-1.7-.5-3.3-1.1-4.5a5.9 5.9 0 0 1 4.1 4.5ZM10 4.1c.6 0 1.4 1.8 1.5 5.1h-3C8.6 5.9 9.4 4.1 10 4.1Zm-1.7.6C7.7 5.9 7.3 7.5 7.2 9.2h-3a5.9 5.9 0 0 1 4.1-4.5Zm-4.1 6.1h3c.1 1.7.5 3.3 1.1 4.5a5.9 5.9 0 0 1-4.1-4.5Zm5.8 5.1c-.6 0-1.4-1.8-1.5-5.1h3c-.1 3.3-.9 5.1-1.5 5.1Zm1.7-.6c.6-1.2 1-2.8 1.1-4.5h3a5.9 5.9 0 0 1-4.1 4.5Z" />
    </svg>
  );
}
