import * as tabs from "@zag-js/tabs";
import { normalizeProps, useMachine, useSetup } from "@zag-js/solid";
import { createMemo, createUniqueId, For } from "solid-js";
import type { Component } from "solid-js";

let Tabs: Component = (data: any) => {
  const [state, send] = useMachine(tabs.machine({ value: "item-1" }));
  const ref = useSetup({ send, id: createUniqueId() });
  const api = createMemo(() => tabs.connect(state, send, normalizeProps));

  return (
    <div ref={ref} {...api().rootProps}>
      <div {...api().triggerGroupProps}>
        <For each={data}>
          {(item) => (
            <button
              {...api().getTriggerProps({ value: item.value })}
              style={{
                height: "50px",
                width: "auto",
                "min-width": "100px",
                "background-color": "white",
                "border-color": "none",
                "border-bottom-color": "#000",
              }}
            >
              {item.label}
            </button>
          )}
        </For>
      </div>
      <For each={data}>
        {(item) => (
          <div
            {...api().getContentProps({ value: item.value })}
            style={{ width: "98vw", height: "70vw", "overflow-y": "scroll" }}
          >
            <p>{item.content}</p>
          </div>
        )}
      </For>
    </div>
  );
};

export default Tabs;
