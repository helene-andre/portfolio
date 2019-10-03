<template lang="pug">
.contact
  h1.contact__title Contact
  .contact__name Helene Andre
  .contact__job Software Developer
  form.contact-form(action="https://formspree.io/helene.andre.06@gmail.com" @submit="checkForm" method="post")
    .contact-form__field-wrapper(:class="{ 'invalid-field': errors.name, 'valid-field': name && !errors.name }")
      input.contact-form__field(
        v-model="name"
        @keyup="validateField('name')"
        type="text"
        name="name"
        placeholder="Name"
        autocomplete="off")
      .invalid-field-message This field is required
    .contact-form__field-wrapper(:class="{ 'invalid-field': errors.email, 'invalid-email': email && errors.email && !errors.emailCorrect, 'valid-field': email && !errors.email }")
      input.contact-form__field(
        v-model="email"
        @keyup="validateField('email')"
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="off")
      .invalid-field-message This field is required
      .invalid-email-message Must be a valid email
    .contact-form__field-wrapper(:class="{ 'invalid-field': errors.subject, 'valid-field': subject && !errors.subject }")
      input.contact-form__field(
        v-model="subject"
        @keyup="validateField('subject')"
        type="text"
        name="subject"
        placeholder="Subject"
        autocomplete="off")
      .invalid-field-message This field is required
    .contact-form__field-wrapper(:class="{ 'invalid-field': errors.message, 'valid-field': message && !errors.message }")
      textarea.contact-form__field(
        v-model="message"
        @keyup="validateField('message')"
        name="message"
        placeholder="Message"
        rows="6"
        cols="80")
      .invalid-field-message This field is required

    .contact-form__send-wrapper
      input.send-button(type="submit" value="Send")
</template>

<script>
export default {
  data: () => ({
    errors: {
      name: false,
      email: false,
      emailCorrect: false,
      subject: false,
      message: false
    },
    name: null,
    email: null,
    subject: null,
    message: null
  }),
  methods: {
    checkForm (e) {
      Object.keys(this.errors).forEach((fieldName, i) => {
        this.errors[fieldName] = !this[fieldName]
      })
      if (this.name && this.email && this.subject && this.message) return true
      e.preventDefault()
    },
    validateField (fieldName) {
      this.errors[fieldName] = !this[fieldName]

      // Validate email field.
      if (fieldName === 'email') {
        const isValidEmail = /^.+@.+\.[a-zA-Z]{2,}$/.test(this.email)
        this.errors.emailCorrect = this.email && isValidEmail
        this.errors.email = !this.email || !this.errors.emailCorrect
      }
    }
  }
}
</script>

<style lang="scss">
.contact {
  &__title {
    padding: 0 18px 0 30px;
    letter-spacing: 6px;
    font-size: 40px;
  }
  &__name, &__job {
    font-family: Lato-regular, Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
  }
  &__job {
    font-size: 16px;
    font-family: Lato-light, Arial, Helvetica, sans-serif;
  }
  & textarea {resize: none;}
}

.contact-form {
  padding: 20px;

  &__field-wrapper {
    margin-bottom: 30px;
    position: relative;
  }

  &__send-wrapper {
    position: relative;
    text-align: center;
  }

  &__field {
    width: 100%;
    display: block;
    background-color: #292929;
    outline: none;
    border: none;
    border-bottom: 1px solid transparent;
    transition: 0.3s ease-in-out;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding: 3%;
    color: #ccc;

    &:focus {
      border-color: #f8bc9b;
    }
  }
}

.send-button {
  width: 4em;
  padding: 3px 10px 3px 10px;
  font-size: 1em;
  line-height: 1em;
  font-family: Lato-Regular, Arial, Helvetica, sans-serif;
  color: #f8bc9b;
  border: 1px solid #f8bc9b;
  background-color: transparent;
  outline: none;
  transition: 0.3s ease-in-out;
  border-radius: 0px;
  -webkit-border-radius:0px;
  appearance: none;
  -webkit-appearance: none;

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
  font-size: 14px;
  padding-top: 0;
  color: #ef5350;
  position: absolute;
  top: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.invalid-field:not(.invalid-email) .invalid-field-message,
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

.valid-field input,
.valid-field textarea,
.valid-field input:focus,
.valid-field textarea:focus {
  border-color: #a5d6a7;
}

.valid-field .invalid-field-message,
.valid-field .invalid-email-message {
  opacity: 0;
}
/**=====================================================================**/

/**=====================================================================**/

// @media screen and (max-width: 570px) {
//   .contact__title {font-size: 40px;}
// }

/**=====================================================================**/

</style>
