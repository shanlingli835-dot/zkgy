import { createFileRoute } from "@tanstack/react-router";
import { TrialRequestPage } from "@/components/site/TrialRequestPage";

export const Route = createFileRoute("/contact.html")({
  head: () => ({
    meta: [
      { title: "免费试用申请 | 中科固源 SOURCEGUARD" },
      { name: "description", content: "申请试用中科固源 SOURCEGUARD 安全产品，选择感兴趣的产品并填写联系信息与需求。" },
      { property: "og:title", content: "免费试用申请 | 中科固源 SOURCEGUARD" },
      { property: "og:description", content: "选择感兴趣的安全产品，填写联系信息与试用需求。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrialRequestPage,
});
