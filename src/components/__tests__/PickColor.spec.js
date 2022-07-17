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