const validator = new JustValidate('#form')
validator.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'enter ur name',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'u must enter minimum 2 characters',
    },
])
validator
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Enter your password',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Password must be at least 8 characters',
    },
  ])
  .addField('#confirmPassword', [
    {
      rule: 'required',
      errorMessage: 'Confirm your password',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Password must be at least 8 characters',
    },
    {
      validator: (value, fields) => {
        return value === fields['#password'].elem.value
      },
      errorMessage: 'Passwords do not match',
    },
  ])

  const showPassword = document.querySelector('.showPassword')
  showPassword.addEventListener('click', () => {
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirmPassword')
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text'
        confirmPasswordInput.type = 'text'
        showPassword.textContent = 'Close'
    } else {
        passwordInput.type = 'password'
        confirmPasswordInput.type = 'password'
        showPassword.textContent = 'Show'
    }
  })