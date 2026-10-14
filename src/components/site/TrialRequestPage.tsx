import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { TrialField } from "@/components/ui/trial-field";
import { primaryNav } from "@/content/navigation";

const productOptions = (primaryNav.find(group => group.id === "products")?.children ?? []).map(product => ({ label: product.label, value: product.label }));
const copyPlaceholders = ["产品能力介绍文案", "安全检测价值说明文案", "适用业务场景说明文案", "试用与服务支持说明文案"];

export function TrialRequestPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const requiredLabels: Record<string, string> = { name: "姓名", phone: "电话", email: "邮箱", organization: "单位", product: "感兴趣的产品" };
    for (const [name, label] of Object.entries(requiredLabels)) {
      if (!String(data.get(name) ?? "").trim()) nextErrors[name] = name === "product" ? "请选择感兴趣的产品" : `请填写${label}`;
    }
    const email = String(data.get("email") ?? "").trim();
    const emailControl = form.elements.namedItem("email");
    if (email && emailControl instanceof HTMLInputElement && !emailControl.validity.valid) nextErrors.email = "请输入有效的邮箱地址";
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
          <h1 id="trial-title">免费试用<span>中科固源安全产品</span></h1>
          <ul>{copyPlaceholders.map((text, index) => <li key={text}><span aria-hidden="true">0{index + 1}</span>{text}</li>)}</ul>
        </section>
        <form className="ds-trial-form" noValidate onSubmit={handleSubmit} aria-labelledby="trial-form-title" onChange={() => { setErrors({}); setStatus(""); }}>
          <h2 id="trial-form-title">申请免费试用</h2>
          <div className="ds-trial-fields">
            <TrialField id="name" label="姓名" required autoComplete="name" placeholder="请输入您的姓名" error={errors.name} />
            <TrialField id="phone" label="电话" kind="tel" required autoComplete="tel" placeholder="请输入联系电话" error={errors.phone} />
            <TrialField id="email" label="邮箱" kind="email" required autoComplete="email" placeholder="请输入邮箱地址" error={errors.email} />
            <TrialField id="organization" label="单位" required autoComplete="organization" placeholder="请输入单位名称" error={errors.organization} />
            <TrialField id="product" label="感兴趣的产品" kind="select" required options={productOptions} error={errors.product} />
            <TrialField id="message" label="我们可以帮到您什么?" kind="textarea" placeholder="请描述您的需求" />
          </div>
          <div className="ds-trial-actions"><Button type="submit" variant="tertiary">提交申请</Button></div>
          <p className="ds-trial-status" role="status">{status}</p>
        </form>
      </main>
    </div>
  );
}
