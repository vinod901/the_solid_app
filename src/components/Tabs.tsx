import * as tabs from "@zag-js/tabs";
import { normalizeProps, useMachine, useSetup } from "@zag-js/solid";
import { createMemo, createUniqueId, For } from "solid-js";
import type { Component } from "solid-js";
import Button from "@suid/material/Button";

let Tabs: Component = (data: any) => {
  const [state, send] = useMachine(tabs.machine({ value: "item-1" }));
  const ref = useSetup({ send, id: createUniqueId() });
  const api = createMemo(() => tabs.connect(state, send, normalizeProps));

  return (
    <div ref={ref} {...api().rootProps}>
      <div {...api().triggerGroupProps} style="display:flex;">
        <For each={data}>
          {(item) => (
            <div style="margin:5px;">
              <Button
                variant="contained"
                {...api().getTriggerProps({ value: item.value })}
              >
                {item.label}
              </Button>
            </div>
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
