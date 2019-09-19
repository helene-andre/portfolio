<template lang="pug">
.email
  h1 Contact
  form#form.contact-form(action="https://formspree.io/helene.andre.06@gmail.com" @submit="checkForm" method="post")
    .contact-form__field-wrapper
      input#name.contact-form__field(v-model="name" @keyup="validateField()" type="text" name="name" placeholder="Name" autocomplete="off")
      .invalid-field-message This field is required
    .contact-form__field-wrapper
      input#email.contact-form__field(v-model="email" @keyup="validateField()" type="email" name="email" placeholder="Email" autocomplete="off")
      .invalid-field-message This field is required
      .invalid-email-message Must be a valid email
    .contact-form__field-wrapper
      input#subject.contact-form__field(v-model="subject" @keyup="validateField()" type="text" name="subject" placeholder="Subject" autocomplete="off")
      .invalid-field-message This field is required
    .contact-form__field-wrapper
      textarea#message.contact-form__field(v-model="message" @keyup="validateField()" name="message" placeholder="Message" rows="6" cols="80")
      .invalid-field-message This field is required

    .contact-form__send-wrapper
      input#send-button(type="submit" value="Send")
</template>

<script>
export default {
  data: () => ({
    errors: [],
    name: null,
    email: null,
    subject: null,
    message: null
  }),
  methods: {
    checkForm: function (e) {
      if (this.name && this.email && this.subject && this.message) return true

      this.errors = []

      !this.name ? document.getElementById('name').parentElement.classList.add('invalid-field') : document.getElementById('name').parentElement.classList.add('invalid-field')

      if (!this.email) {
        document.getElementById('email').parentElement.classList.add('invalid-field')
      }
      if (!this.subject) {
        document.getElementById('subject').parentElement.classList.add('invalid-field')
      }
      if (!this.message) {
        document.getElementById('message').parentElement.classList.add('invalid-field')
      }
      e.preventDefault()
    },
    validateField: function (e) {
      let field = document.getElementById(event.target.id)
      let fieldWrapper = field.parentElement
      let fieldValue = field.value.trim()

      if (!fieldValue) {
        fieldWrapper.classList.add('invalid-field')
        fieldWrapper.classList.remove('correct-field')
        fieldWrapper.classList.remove('invalid-email')
        return false
      }

      // If field is email field.
      else if (field.id === 'email' && !/^.+@.+\.[a-zA-Z]{2,}$/.test(fieldValue)) {
        fieldWrapper.classList.remove('invalid-field')
        fieldWrapper.classList.add('invalid-email')
        return false
      }

      else {
        fieldWrapper.classList.remove('invalid-field')
        fieldWrapper.classList.remove('invalid-email')
        fieldWrapper.classList.add('correct-field')
        return true
      }
    }
  }
}
</script>

<style lang="scss">
.email {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & h1 {padding-bottom: 30px;}
  & textarea { resize: none; color: #000}
}

input[type=submit] {
  border-radius: 0px;
  -webkit-border-radius:0px;
  appearance: none;
  -webkit-appearance: none;
}

.contact-form {
  height: 34em;
  width: 360px;
  &__field-wrapper, &__send-wrapper {
    width: 100%;
    margin-bottom: 9%;
    position: relative;
  }
  &__field {
    width: 100%;
    background-color: #f5f5f5;
    outline: none;
    border: none;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out;
    font-family: 'Roboto', arial;
    font-size: 14px;
    padding: 3%;
    &:focus {
      border-color: #f8bc9b;
    }
  }
}

input {
  color: #190e0b;
}

.send-button-wrapper {
  position: absolute;
  top: 0%;
}

#send-button {
  width: 4em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 10px 3px 10px;
  font-size: 1em;
  line-height: 1em;
  font-family: Roboto, arial;
  color: #f8bc9b;
  border: 1px solid #f8bc9b;
  background-color: transparent;
  outline: none;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 1;
    color: #757575;
    border-color: #757575;
  }
}
/**=====================================================================**/
/**=========================  error messages ===========================**/
.invalid-field-message, .invalid-email-message {
  font-style: italic;
  font-size: 12px;
  padding-top: 2px;
  color: #ef5350;
  position: absolute;
  top: 100%;
  margin-top: 3px;
  opacity: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}

.invalid-field .invalid-field-message,
.invalid-email .invalid-email-message {
  opacity: 1;
  z-index: 1;
}

.invalid-field input,
.invalid-email input,
.invalid-field textarea,
.invalid-field input:focus,
.invalid-email input:focus,
.invalid-field textarea:focus {
  border-color: #ef5350;
}

.correct-field input,
.correct-field textarea,
.correct-field input:focus,
.correct-field textarea:focus {
  border-color: #a5d6a7;
}

.correct-field .invalid-field-message,
.correct-field .invalid-email-message {
  opacity: 0;
}
/**=====================================================================**/
</style>
