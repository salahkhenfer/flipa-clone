import { i as i18nObject } from "../../../chunks/i18n-util.js";
const load = async ({ parent }) => {
  const { locale } = await parent();
  const LL = i18nObject(locale);
  console.info(LL.log({ fileName: "+page.ts" }));
  return {
    title: LL.title({ year: 2021 })
  };
};
export {
  load
};
