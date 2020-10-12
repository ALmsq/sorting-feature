import React from "react"
import { shallow, configure, mount } from 'enzyme'

import Table from './table'


it("renders without crashing", () => {
    shallow(<Table />)
})

describe('Table', () => {
    it('renders Table correctly', () => {
        mount(<Table/>)
    })
    it('should update state on click', async () => {
        const order = jest.fn()   
        const wrapper = mount(<Table onClick={order}/>)
        const handleClick = await jest.spyOn(React, 'useState')
        handleClick.mockImplementation(order => [order, setOrder])

        wrapper.find('.baseMin').at(1).simulate("click")
        expect(order).toBeTruthy()
    })

})

