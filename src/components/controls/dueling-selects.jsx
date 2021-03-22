import React from 'react'
import styled from 'styled-components'
import ControlledSelect from './select-controlled'
import titleCaseArray from '../helpers/title-case-array'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 64px;
`;

export default class DuelingSelects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      categoriesValue: '',
      items: [],
      currentItems: [],
      placeholderActive: true,
    }

    // init options
    const { categories, items } = this.props

    // init categories
    const newCategories = titleCaseArray(categories)
    const newCategoriesValue = newCategories[0]

    this.state.categories = newCategories
    this.state.categoriesValue = newCategoriesValue

    // init categoriesValue

    // init items
    const newItems = { ...items }
    const newItemsKeys = Object.keys(newItems);

    for (let i = 0; i < newItemsKeys.length; i += 1) {
      const key = newItemsKeys[i]
      const titleCaseValues = titleCaseArray(newItems[key])
      newItems[key] = titleCaseValues
    }

    this.state.items = newItems

    // init currentItems
    const currentItemsKey = newCategoriesValue.toLowerCase()
    this.state.currentItems = newItems[currentItemsKey]
  }

  handleCategoriesChange = (event) => {
    // TODO: Maintain focus
    const { categoriesValue, items } = this.state
    const targetValue = event.target.value

    if (targetValue !== categoriesValue) {
      // update categoryValue
      this.setState({ categoriesValue: targetValue })

      // update currentItems
      const currentItemsKey = targetValue.toLowerCase()
      const currentItems = items[currentItemsKey]
      this.setState({
        currentItems,
        placeholderActive: true,
      })
    }
  }

  // eslint-disable-next-line no-unused-vars
  handleItemsChange = (event) => {
    const { placeholderActive } = this.state

    if (placeholderActive) {
      this.setState({ placeholderActive: !placeholderActive })
    }
  }

  render() {
    const {
      categories, categoriesValue, currentItems, placeholderActive,
    } = this.state
    const { categoriesLabel, itemsLabel } = this.props

    return (
      <Row key="duelingSelects">
        <ControlledSelect
          label={categoriesLabel}
          options={categories}
          onChange={this.handleCategoriesChange}
          value={categoriesValue}
          key="ted"
        />
        <ControlledSelect
          label={itemsLabel}
          options={currentItems}
          onChange={this.handleItemsChange}
          placeholderActive={placeholderActive}
          placeholder
        />
      </Row>
    )
  }
}
