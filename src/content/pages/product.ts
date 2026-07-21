export type ProductCta = {
  label: string;
  href: string;
};

export type ProductModuleItem = {
  id: string;
  marker?: string;
  title: string;
  description: string;
};

export type ProductModule = {
  id: string;
  type: "value" | "capabilities" | "advantages" | "protocol" | "integration";
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly ProductModuleItem[];
  cta?: ProductCta;
};

export type ProductPageRecord = {
  id: string;
  route: string;
  template: "product";
  sourcePage: string;
  canonicalLegacyUrl: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
    unresolved?: readonly string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: ProductCta;
    signals: readonly string[];
    flowTitle: string;
    flow: readonly string[];
  };
  modules: readonly ProductModule[];
  bottomCta: {
    title: string;
    description: string;
    primaryCta: ProductCta;
  };
};
