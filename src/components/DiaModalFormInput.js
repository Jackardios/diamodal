import { generateUID, addClass, removeClass } from '../utils/helpers';

const ID_ATTRIBUTE_NAME = 'data-diamodal-form-input-id';

const SELECTORS = {
    wrapper: '.diamodal-form-input',
    input: '.diamodal-form-input__input',
};

const STATE_CLASSES = {
    focused: 'diamodal-form-input--focused',
    floated: 'diamodal-form-input--floated',
}

function prepareDiamodalFormInputs(selectors, rootElement) {
    const prepared = {};
    const wrappers = rootElement.querySelectorAll(selectors.wrapper);

    for (let i = 0; i < wrappers.length; ++i) {
        const wrapper = wrappers[i],
              input = wrapper.querySelector(selectors.input),
              uid = generateUID();
        prepared[uid] = {
            wrapper: wrapper,
            input: input,
        };
        input.setAttribute(ID_ATTRIBUTE_NAME, uid);
        if(input.value !== "") {
            addClass(wrapper, STATE_CLASSES.floated);
        }
    }
    return prepared;
}

export default (rootElement = document) => {
    const prepared = prepareDiamodalFormInputs(SELECTORS, rootElement);
    const inputs = document.querySelectorAll(SELECTORS.input);

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener('focus', function() {
            const inputId = this.getAttribute(ID_ATTRIBUTE_NAME);
            
            addClass(prepared[inputId].wrapper, STATE_CLASSES.focused);
            addClass(prepared[inputId].wrapper, STATE_CLASSES.floated);
        });
        inputs[i].addEventListener('blur', function() {
            const inputId = this.getAttribute(ID_ATTRIBUTE_NAME);

            removeClass(prepared[inputId].wrapper, STATE_CLASSES.focused);
            if(prepared[inputId].input.value === "") {
                removeClass(prepared[inputId].wrapper, STATE_CLASSES.floated);
            }
        });
    }
};