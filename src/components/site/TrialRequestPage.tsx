import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { TrialField } from "@/components/ui/trial-field";
import { primaryNav } from "@/content/navigation";

const productOptions = (primaryNav.find(group => group.id === "products")?.children ?? []).map(product => ({ label: product.label, value: product.label }));
const demoHighlights = ["核心产品能力与应用场景", "自动化安全测试流程", "风险发现与分析报告", "与现有开发流程的集成方式"];
const requiredLabels: Record<string, string> = { name: "姓名", phone: "联系电话", email: "企业邮箱", organization: "公司名称", product: "感兴趣的产品" };

export function TrialRequestPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    for (const [name, label] of Object.entries(requiredLabels)) {
      if (!String(data.get(name) ?? "").trim()) nextErrors[name] = name === "product" ? "请选择感兴趣的产品" : `请填写${label}`;
    }
    const email = String(data.get("email") ?? "").trim();
    const emailControl = form.elements.namedItem("email");
    if (email && emailControl instanceof HTMLInputElement && !emailControl.validity.valid) nextErrors.email = "请输入有效的企业邮箱";
    const phone = String(data.get("phone") ?? "").trim();
    if (phone && !/^\+?[\d\s()\-]{6,25}$/.test(phone)) nextErrors.phone = "请输入有效的联系电话";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      const firstControl = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (firstControl instanceof HTMLElement) firstControl.focus();
      return;
    }
    setStatus("在线提交暂未开放，您填写的内容尚未发送。");
  }
  return (
    <div className="ds-trial-page">
      <header className="ds-trial-header">
        <Link to="/" className="ds-trial-logo" aria-label="中科固源 / SOURCEGUARD 首页"><BrandLogo variant="color" height={40} /></Link>
      </header>
      <main className="ds-trial-layout">
        <section className="ds-trial-copy" aria-labelledby="trial-title">
          <p className="ds-trial-eyebrow">PRODUCT DEMO</p>
          <h1 id="trial-title">预约产品演示</h1>
          <p className="ds-trial-lead">了解中科固源如何帮助企业识别安全风险，提升安全测试效率。</p>
          <h2 className="ds-trial-demo-heading">在演示中，你将了解</h2>
          <ul className="ds-trial-checklist">
            {demoHighlights.map(item => (
              <li key={item}>
                <span className="ds-trial-check" aria-hidden="true"><Check size={14} strokeWidth={2.5} /></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="ds-trial-note">面向企业安全团队、研发团队与检测机构</p>
        </section>
        <form className="ds-trial-form" noValidate onSubmit={handleSubmit} aria-labelledby="trial-form-title" onChange={() => { setErrors({}); setStatus(""); }}>
          <h2 id="trial-form-title">获取专属产品演示</h2>
          <p className="ds-trial-form-subtitle">填写信息，我们将与您联系。</p>
          <div className="ds-trial-fields">
            <TrialField id="name" label="姓名" required autoComplete="name" placeholder="请输入姓名" error={errors.name} />
            <TrialField id="email" label="企业邮箱" kind="email" required autoComplete="email" placeholder="name@company.com" error={errors.email} />
            <TrialField id="organization" label="公司名称" required autoComplete="organization" placeholder="请输入公司名称" error={errors.organization} />
            <TrialField id="phone" label="联系电话" kind="tel" required autoComplete="tel" placeholder="请输入联系电话" error={errors.phone} />
            <TrialField id="product" label="感兴趣的产品" kind="select" required options={productOptions} error={errors.product} />
          </div>
          <div className="ds-trial-actions"><Button type="submit" variant="primary">提交申请</Button></div>
          <p className="ds-trial-privacy">提交信息即表示您同意我们的隐私政策。</p>
          <p className="ds-trial-status" role="status">{status}</p>
        </form>
      </main>
    </div>
  );
}
