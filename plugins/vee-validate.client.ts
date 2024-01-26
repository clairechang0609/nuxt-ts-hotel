import { defineRule, configure } from 'vee-validate';
import * as allRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 迴圈依序加入規則
Object.keys(allRules).forEach(ruleKey => {
	defineRule(ruleKey, (allRules as any)[ruleKey]);
});

// 自訂密碼驗證
defineRule('password', (value: string) => {
	if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value)) {
		return '密碼需包含英文及數字';
	}
	return true;
});

// 配置訊息
configure({
	generateMessage: localize({ zh_TW: zhTW }),
	validateOnInput: true
});

setLocale('zh_TW');

// 必須定義，用來封裝 plugin
export default defineNuxtPlugin(_nuxtApp => {});
