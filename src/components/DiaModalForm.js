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
    formTemplate = require("../templates/diamodal-form.art"),
    attributes = [],
    inputs = [],
    submitText = "Отправить",
    submitButtomClass = "diamodal-form__submit-button",
    addRequiredLabel = true,
    requiredLabelText = "Обязательные для заполнения поля",
    onSubmit = f=>f,
    ...otherOptions
  }) {
    const formHTML = formTemplate({
      attributes,
      inputs: addIdsToInputs(inputs),
      submitText,
      submitButtomClass,
      addRequiredLabel,
      requiredLabelText,
    });

    super({
      content: formHTML,
      ...otherOptions,
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