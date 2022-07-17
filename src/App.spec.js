import { describe, it, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
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
    expect(wrapper.text()).toContain(`The Text Color: ${store.color.text}`)
  })
  it('Get background Color from pinia', () => {
    expect(wrapper.text()).toContain(`The background Color: ${store.color.background}`)
  })
})

