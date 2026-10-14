import { createFileRoute } from "@tanstack/react-router";
import { TrialRequestPage } from "@/components/site/TrialRequestPage";

export const Route = createFileRoute("/contact.html")({
  head: () => ({
    meta: [
      { title: "预约产品演示 | 中科固源 SOURCEGUARD" },
      { name: "description", content: "预约中科固源 SOURCEGUARD 产品演示：了解核心产品能力、自动化安全测试流程与风险分析报告，填写企业邮箱与联系电话，我们将与您联系。" },
      { property: "og:title", content: "预约产品演示 | 中科固源 SOURCEGUARD" },
      { property: "og:description", content: "预约产品演示，了解中科固源安全产品能力与自动化安全测试流程。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrialRequestPage,
});
