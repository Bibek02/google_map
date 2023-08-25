import { getById, getByTag } from "../../support/common/element_locators"

export class MapPage {
    private static BAR_INPUT_ID = "searchboxinput"
    private static SEARCH_BUTTON_ID = "searchbox-searchbutton"
    private static CLOSE_BUTTON_TAG = "button.vF7Cdb"
    private static LEFT_PANEL_TAG = "#QA0Szd  div.bJzME.tTVLSc div.e07Vkf.kA9KIf"
    private static LEFT_PANEL_HEADER_TAG = '#QA0Szd div.TIHn2'
    private static LEFT_PANEL_ICONS_TAG = 'div.m6QErb.Pf6ghf.ecceSd.tLjsW div button'

    searchBar = {
        click: {
            searchButton(): void {
                getById(MapPage.SEARCH_BUTTON_ID).click({ force: true }).then((_) => {
                    cy.wrap(_).parent().parent().find(MapPage.CLOSE_BUTTON_TAG, { timeout: 40000 }).should('be.visible')
                })
            }
        },
        fill: {
            searchInputText(text: string): void {
                getById(MapPage.BAR_INPUT_ID).clear().type(text)
            },
            searchInputNumber(numb: number): void {
                getById(MapPage.BAR_INPUT_ID).clear().type(numb.toString())
            }
        }
    }

    leftPanel = {
        assert: {
            header(text: string): void {
                getByTag(MapPage.LEFT_PANEL_HEADER_TAG, 40000).should('be.visible').then((_) => {
                    cy.wrap(_).find('h1').first().should('have.text', text)
                })
            },
            panel(text): void {
                getByTag(MapPage.LEFT_PANEL_TAG, 40000).should('be.visible').then((_) => {
                    cy.wrap(_).contains(text)
                })
            }
        },
        click: {
            direction() {
                cy.window().scrollTo('top', { ensureScrollable: false })
                getByTag(MapPage.LEFT_PANEL_ICONS_TAG).first().click({ force: true })
            }
        }
    }
}
export const onMapPage = new MapPage()