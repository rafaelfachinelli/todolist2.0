import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

export default function Todo() {
  return (
    <>
      <Header name="Tarefas" small="Cadastro" />
      <ToDoForm />
      <ToDoList />
    </>
  );
}
