import { getByTag } from "../../support/common/element_locators"

export class DestinationPage {
    private static START_DIRECTION_TAG = 'div#sb_ifc50'
    private static END_DIRECTION_TAG = 'div#sb_ifc51'
    private static DIRECTION_PANEL_TAG = 'div.JuLCid'

    list = {
        fill: {
            from(text: string) {
                getByTag(DestinationPage.START_DIRECTION_TAG).type(text)
            },
            to(text: string) {
                getByTag(DestinationPage.END_DIRECTION_TAG).type(text)
            }
        },
        assert: {
            endDirection(text: string): void {
                getByTag(DestinationPage.DIRECTION_PANEL_TAG, 40000).should('be.visible').then((_) => {
                    cy.wrap(_).find(DestinationPage.END_DIRECTION_TAG).find('input').then((_) => {
                        const value = _.attr('aria-label')
                        expect(value).contain(text)
                    })
                })
            }
        }
    }
}
export const onDestinationPage = new DestinationPage()