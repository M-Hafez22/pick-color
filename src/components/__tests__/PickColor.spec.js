import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import PickColor from '../PickColor.vue'
import { useColorStore } from "../../stores/color";

const wrapper = mount(PickColor, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn, })],
  },
})

const store = useColorStore()

describe('Renders labels', () => {
  it('Renders Background Label', () => {
    const bgLabel = wrapper.findAll('label')[0]
    expect(bgLabel.text()).toBe('background Color:')
  })
  it('Renders text Label', () => {
    const textLabel = wrapper.findAll('label')[1]
    expect(textLabel.text()).toBe('Text Color:')
  })
  it('Renders accent  Label', () => {
    const accentLabel = wrapper.findAll('label')[2]
    expect(accentLabel.text()).toBe('Accent Color:')
  })
})

describe('Get Colors from Store', () => {
  it('Get background Color from store', () => {
    const bgColor = wrapper.findAll('[type="color"]')[0]
    expect(bgColor.element.value).toBe(store.color.background)
  })
  it('Get Text Color from store', () => {
    const textColor = wrapper.findAll('[type="color"]')[1]
    expect(textColor.element.value).toBe(store.color.text)
  })
  it('Get Text Color from store', () => {
    const accentColor = wrapper.findAll('[type="color"]')[2]
    expect(accentColor.element.value).toBe(store.color.accent)
  })
})
describe('Update the Store', () => {
  it('Update background Color', () => {
    const backgroundColor = wrapper.findAll('input')[0]
    backgroundColor.setValue('#222222')
    backgroundColor.trigger('input')
    expect(store.color.background).toBe('#222222')
  })
  it('Update Text Color', () => {
    const textColor = wrapper.findAll('input')[1]
    textColor.setValue('#222222')
    textColor.trigger('input')
    expect(store.color.text).toBe('#222222')
  })
  it('Update Accent Color', () => {
    const accentColor = wrapper.findAll('input')[2]
    accentColor.setValue('#222222')
    accentColor.trigger('input')
    expect(store.color.accent).toBe('#222222')
  })
})
