// import styles
import "./main.scss";

// import components
import {
  DiaModal,
  DiaModalForm
} from "../src/index";

document.addEventListener("DOMContentLoaded", function (event) {
  window.firstModal = new DiaModalForm({
    title: "First Modal",
    triggerBtnSelector: ".open-modal-first",
    inputs: [{
        type: "text", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "text_name", // default: ""
        value: "text_value", // default: ""
        placeholder: "text_placeholder", // default: ""
        tabindex: "",
        required: true, // default: false,
        disabled: false,
        autofocus: false,
        readOnly: false,
        // other attributes
      },
      {
        type: "number", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "number_name", // default: ""
        value: "number_value", // default: ""
        placeholder: "number_placeholder", // default: ""
        required: true, // default: false
        step: "", // default: ""
      },
      {
        type: "textarea", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "textarea_name", // default: ""
        value: "textarea_value", // default: ""
        placeholder: "textarea_placeholder", // default: ""
        required: false, // default: false
      },
      {
        type: "select", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "select_name", // default: ""
        placeholder: "select_placeholder", // default: ""
        required: true, // default: false,
        options: [
          {
            text: "First option (text)",
            value: "First option",
          },
          {
            value: "Second option",
          },
          {
            text: "Third option",
            value: "Third option",
            selected: true
          }
        ]
      },
      {
        type: "radio", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "radio_name", // default: ""
        value: "radio_value", // default: ""
        placeholder: "radio_placeholder", // default: ""
        required: false, // default: false
      },
      {
        type: "checkbox", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
        name: "checkbox_name", // default: ""
        value: "checkbox_value", // default: ""
        placeholder: "checkbox_placeholder", // default: ""
        required: true, // default: false
      },
    ]
  });

  const secondModal = new DiaModal({
    title: "Second Modal",
    triggerBtnSelector: ".open-modal-second",
    content: "<button class='open-modal-first'>Open first modal</button>"
  });
});