import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import App from  './App.vue'
import { useColorStore } from "./stores/color";

const wrapper = mount(App, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn,})],
  },
})

const store = useColorStore()

describe('App', () => {
  it('Get text color from pinia', () => {
    expect(wrapper.text()).toContain(`Text Color: ${store.color.text}`)
  })
  it('Get background Color from pinia', () => {
    expect(wrapper.text()).toContain(`Background Color: ${store.color.background}`)
  })
  it('Get Accent Color from pinia', () => {
    expect(wrapper.text()).toContain(`Accent Color: ${store.color.accent}`)
  })
})

