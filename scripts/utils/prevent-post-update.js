const formPost = document.getElementById('post')
const saveButton = document.getElementById('publish')
const validators = []

async function validate() {
  const results = await Promise.all(
    validators.map(async validation => {
      return await validation()
    })
  )
  return results.some(r => !r)
}

async function handleSubmit(e) {
  const isValid = await validate()
  if (!isValid) {
    e.preventDefault()
  }
}

export function addValidator(validator) {
  validators.push(validator)
}

if (formPost) {
  formPost.addEventListener('submit', handleSubmit)
}

if (saveButton) {
  saveButton.addEventListener('click', handleSubmit)
}
