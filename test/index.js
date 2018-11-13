// import styles
import "../src/scss/main.scss";

// import components
import { ready } from "../src/utils/helpers"; 
import { DiaModal, DiaModalForm } from "../lib/diamodal";

ready(() => {
  const firstModal = new DiaModalForm({
      title: "First Modal",
      action: "/",
      inputs: [
        {
          type:        "text", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "text_name", // default: ""
          value:       "text_value", // default: ""
          placeholder: "text_placeholder", // default: ""
          tabindex:    "",
          required:    true, // default: false,
          disabled:    false,
          autofocus:   false,
          readOnly:    false,
          // other attributes
        },
        {
          type:        "number", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "number_name", // default: ""
          value:       "number_value", // default: ""
          label:       "number_label", // default: ""
          placeholder: "number_placeholder", // default: ""
          required:    true, // default: false
          step:        "", // default: ""
        },
        {
          type:        "textarea", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "textarea_name", // default: ""
          value:       "textarea_value", // default: ""
          label:       "textarea_label", // default: ""
          placeholder: "textarea_placeholder", // default: ""
          required:    false, // default: false
        },
        {
          type:        "radio", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "radio_name", // default: ""
          value:       "radio_value", // default: ""
          label:       "radio_label", // default: ""
          placeholder: "radio_placeholder", // default: ""
          required:    true, // default: false
        },
        {
          type:        "checkbox", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "checkbox_name", // default: ""
          value:       "checkbox_value", // default: ""
          label:       "checkbox_label", // default: ""
          placeholder: "checkbox_placeholder", // default: ""
          required:    false, // default: false
        },
      ]
    });
  
    const secondModal = new DiaModalForm({
      title: "Second Modal",
      action: "/",
      inputs: [
        {
          type:        "text", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "text_name", // default: ""
          value:       "text_value", // default: ""
          placeholder: "text_placeholder", // default: ""
          tabindex:    "",
          required:    true, // default: false,
          disabled:    false,
          autofocus:   false,
          readOnly:    false,
          // other attributes
        },
        {
          type:        "number", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "number_name", // default: ""
          value:       "number_value", // default: ""
          label:       "number_label", // default: ""
          placeholder: "number_placeholder", // default: ""
          required:    true, // default: false
          step:        "", // default: ""
        },
        {
          type:        "radio", // default: text (text | number | email | tel | textarea | radio | checkbox | select)
          name:        "radio_name", // default: ""
          value:       "radio_value", // default: ""
          label:       "radio_label", // default: ""
          placeholder: "radio_placeholder", // default: ""
          required:    false, // default: false
        },
      ]
    });
  
    document.querySelector('.open-modal-first').addEventListener('click', () => firstModal.open());
    document.querySelector('.open-modal-second').addEventListener('click', () => secondModal.open());
});