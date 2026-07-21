import { createFileRoute } from "@tanstack/react-router";

import { GlobalFooter } from "@/components/site/GlobalFooter";
import { GlobalHeader } from "@/components/site/GlobalHeader";
import { ProductTemplate } from "@/components/site/ProductTemplate";
import { SiteShell } from "@/components/site/SiteShell";
import { wisdomPage } from "@/content/pages/wisdom";

export const Route = createFileRoute("/wisdom.html")({
  head: () => ({
    meta: [
      { title: wisdomPage.metadata.title },
      {
        name: "description",
        content: wisdomPage.metadata.description,
      },
      { name: "keywords", content: wisdomPage.metadata.keywords },
      { property: "og:title", content: wisdomPage.metadata.title },
      { property: "og:description", content: wisdomPage.metadata.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: wisdomPage.canonicalLegacyUrl },
    ],
    links: [{ rel: "canonical", href: wisdomPage.canonicalLegacyUrl }],
  }),
  component: WisdomRoute,
});

function WisdomRoute() {
  return (
    <SiteShell header={<GlobalHeader />} footer={<GlobalFooter />}>
      <ProductTemplate page={wisdomPage} />
    </SiteShell>
  );
}
