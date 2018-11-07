import DiaModal from "./DiaModal";
import diaModalFormInputInit from "./DiaModalFormInput";
import { generateUID } from "../utils/helpers"; 

function addIdsToInputs(inputs) {
  if(inputs && inputs.length) {
    return inputs.map((input) => {
      input.id = input.name + generateUID();
      return input;
    });
  }
}

function wrapInputsToForm(html) {
  if (document) {
    const form = document.createElement('form');
    form.innerHTML = html;
    return form;
  }
}

class DiaModalForm extends DiaModal {
  constructor({
    template = require("../templates/diamodal.art"),
    formTemplate = require("../templates/diamodal-form.art"),
    title = "",
    action = "",
    method = "GET",
    enctype = "",
    attributes = [],
    inputs = [],
    submitText = "Отправить",
    onSubmit = f=>f,
  }) {

    const formHTML = formTemplate({
      action,
      inputs: addIdsToInputs(inputs),
      submitText
    });
    console.log(formHTML);

    super({
      template,
      title,
      content: formHTML,
    });

    this._formTemplate = formTemplate;
    this._onSubmit = onSubmit;

    this.initForm();
  }

  initForm() {
    this._form = this._element.querySelector('[data-diamodal-form]');
    this._form.addEventListener('submit', this._onSubmit);
    diaModalFormInputInit(this._form);
  }
}

export default DiaModalForm;