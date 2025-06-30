import { renderSuspended } from "@nuxt/test-utils/runtime"
import { describe, expect, it } from "vitest"

import type { ComponentTestProps } from "./component-test.vue"

import ComponentTest from "./component-test.vue"

const messageValid: ComponentTestProps = {
  state: "valid",
}

const messageInvalid: ComponentTestProps = {
  state: "invalid",
}

describe("atomsMessage.vue", () => {
  describe("check the output of our component in different given states", async () => {
    it.each([
      ["stateValid", messageValid],
      ["stateInvalid", messageInvalid],
    ])("renders %s correctly", async (_, props: ComponentTestProps) => {
      const {
        unmount,
        html,
      } = await renderSuspended(ComponentTest, {
        props,
        slots: {
          title: () => `State message: ${props.state}`,
        },
      })

      expect(html()).toMatchSnapshot()

      unmount()
    })
  })
})
