import Input from "./Input"

function Form() {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Email" id="email" type="email" />
      <Input label="Senha" id="password" type="password" />
      <button>Login</button>    
    </form>
  )
}

export default Form
