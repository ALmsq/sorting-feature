import React from "react"
import { shallow, configure, mount } from 'enzyme'
import App from './App'
import Table from './Table/table'


it("renders without crashing", () => {
    shallow(<App />)
})

it("renders Table", () => {
    const wrapper = shallow(<App />)
    const table = <Table/>
    expect(wrapper.contains(table)).toEqual(true)
})
