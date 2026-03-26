import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "vZ8YLJfMu4Bkb27adUM6r5",  // ID of a project you are using
      token: "7QddrSN6pM69fmU9yc3QTm8PoJdgnCESuvq76pveg8MwV08hAjAaYRO52VIPaEmfVigSwcnVMhbtSPenxzOCw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})