import { getByTag } from "../../support/common/element_locators"

export class PrivacyPage {
    private static BUTTON_ACCEPT_BTN_TAG: string = 'button[jsname="b3VHJd"]'
    private static BUTTON_DECLINE_ALL_TAG: string = 'button[jsname="tWT92d"]'

    form = {
        click: {
            acceptAll() {
                getByTag(PrivacyPage.BUTTON_ACCEPT_BTN_TAG).first().click()
            },
            declineAll() {
                getByTag(PrivacyPage.BUTTON_DECLINE_ALL_TAG).first().click()
            }
        }
    }
}
export const onPrivacyPage = new PrivacyPage()