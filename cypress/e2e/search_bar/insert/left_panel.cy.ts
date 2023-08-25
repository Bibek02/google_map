import { onDestinationPage } from "../../../pages/map/destination"
import { onMapPage } from "../../../pages/map/map"
import { RandomUtil } from "../../../support/util/random_util"

describe('Search bar: insert place', () => {
  beforeEach(() => {
    cy.navigateToMap()
  })
  it('Insert city in the left panel headline', { tags: '@happyPath' }, () => {
    //given
    const city = Cypress.env('firstCity')
    //when
    onMapPage.searchBar.fill.searchInputText(city)
    //and
    onMapPage.searchBar.click.searchButton()
    //then
    onMapPage.leftPanel.assert.header(city)
  })
  it('Inser city and check autofil in the direction field', { tags: '@happyPath' }, () => {
    //given
    const city = Cypress.env('secondCity')
    //when
    onMapPage.searchBar.fill.searchInputText(city)
    //and
    onMapPage.searchBar.click.searchButton()
    //then
    onMapPage.leftPanel.assert.header(city)
    //when
    onMapPage.leftPanel.click.direction()
    //then
    onDestinationPage.list.assert.endDirection(city)
  })
  it.only('Inser random numbers in search bar', { tags: '@unHappyPath' }, () => {
    //given
    const number = RandomUtil.generateNumberOfDigits(21)
    //when
    onMapPage.searchBar.fill.searchInputNumber(number)
    //and
    onMapPage.searchBar.click.searchButton()
    //then
    onMapPage.leftPanel.assert.panel(number)
  })
})