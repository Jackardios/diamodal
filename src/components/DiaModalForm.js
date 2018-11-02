import dot from "dot";
import DiaModal from "./DiaModal";

function getContentByInputs(inputs) {
  
}

class DiaModalForm extends DiaModal {
  constructor({
    template,
    inputTemplate,
    title,
    inputs,
    onSubmit = f=>f,
  }) {

    const content = getContentByInputs(inputs, formId);

    super({
      template,
      title,
      content
    });
  }
}

export default DiaModalForm;